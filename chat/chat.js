document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const messageInput = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('#send-btn');
    const typeField = chatContainer.querySelector('.type-field');

    // --- Scripted Chat Configuration ---
    let scriptActive = true;
    let scriptMessageIndex = 0;
    let currentTypingCharIndex = 0;

    const chatScript = [
        { sender: 'seller', message: 'สวัสดีครับ วิลล่าที่ติดทะเลมีขายอยู่ไหมครับ' },
        { sender: 'user', message: 'สวัสดีครับ ยังมีอยู่ครับ ตอนนี้มีโปรโมชั่นราคาพิเศษด้วยนะครับ สนใจนัดดูโครงการหรือดูห้องจริงได้เลยครับ' },
        { sender: 'seller', message: 'ได้ครับ อยากนัดดูวันเสาร์นี้ มีรอบว่างช่วงบ่ายไหมครับ' },
        { sender: 'user', message: 'มีครับ ผมจองให้วันเสาร์เวลา 14:00 น.นะครับ ถ้าต้องการบริการรถรับ-ส่ง แจ้งเพิ่มเติมได้ครับ' }
    ];

    // --- Random Seller Responses (for after script ends) ---
    const randomSellerResponses = [
        "ครับ",
        "ครับ",
        "ครับ",
        "ครับผม",
        "โอเคครับ"
    ];

    // --- Typing Indicator Element ---
    let currentTypingIndicatorElement = null; // Will store the currently active typing indicator element


    // Function to format the current time as HH:MM
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Function to add a message to the chat
    function addMessage(sender, content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(isUser ? 'user-message' : 'seller-message');

        const nameDiv = document.createElement('div');
        nameDiv.classList.add(isUser ? 'user-name' : 'seller-name');
        nameDiv.textContent = sender;
        messageDiv.appendChild(nameDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add(isUser ? 'user-message-content' : 'seller-message-content');
        contentDiv.textContent = content;
        messageDiv.appendChild(contentDiv);

        // Add timestamp
        const timestampDiv = document.createElement('div');
        timestampDiv.classList.add('message-timestamp');
        timestampDiv.textContent = getCurrentTime();
        messageDiv.appendChild(timestampDiv);


        chatContainer.insertBefore(messageDiv, typeField); // Insert before the type field
        scrollToTypeField();
    }

    // Function to scroll the chat container so the type-field is visible
    function scrollToTypeField() {
        typeField.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // Adjust textarea height dynamically
    function adjustTextareaHeight() {
        messageInput.style.height = 'auto';
        messageInput.style.height = (messageInput.scrollHeight) + 'px';
    }

    // --- Typing Indicator Functions ---

    function showTypingIndicator() {
        // Only create if one isn't already active
        if (!currentTypingIndicatorElement) {
            currentTypingIndicatorElement = document.createElement('div');
            currentTypingIndicatorElement.classList.add('typing-indicator-wrapper');
            currentTypingIndicatorElement.innerHTML = `
                <div class="typing-indicator-dots">
                    <span></span><span></span><span></span>
                </div>
            `;
            // Insert right above the type-field, where the next message would go
            chatContainer.insertBefore(currentTypingIndicatorElement, typeField);
        }
        // Ensure it's visible if it was hidden
        currentTypingIndicatorElement.style.display = 'flex';
        scrollToTypeField(); // Scroll to ensure it's visible
    }

    function hideTypingIndicator() {
        if (currentTypingIndicatorElement && currentTypingIndicatorElement.parentNode) {
            currentTypingIndicatorElement.parentNode.removeChild(currentTypingIndicatorElement);
            currentTypingIndicatorElement = null; // Clear reference
        }
    }


    // --- Scripted Chat Logic ---

    function prepareUserToTypeScriptMessage() {
        if (!scriptActive || scriptMessageIndex >= chatScript.length) {
            endScript();
            return;
        }

        const currentScriptItem = chatScript[scriptMessageIndex];

        if (currentScriptItem.sender === 'seller') { // User is supposed to type this message
            hideTypingIndicator(); // Ensure indicator is hidden if it was shown
            messageInput.value = '';
            currentTypingCharIndex = 0;
            messageInput.disabled = false;
            sendButton.style.pointerEvents = 'none';
            sendButton.style.opacity = '0.5';
            messageInput.focus();
        } else { // Actual seller is supposed to respond with this message
            messageInput.disabled = true;
            sendButton.style.pointerEvents = 'none';
            sendButton.style.opacity = '0.5';
            showTypingIndicator(); // Show typing indicator

            setTimeout(() => {
                // Before adding the actual message, remove the typing indicator
                hideTypingIndicator();
                addMessage('seller name', currentScriptItem.message, false);
                scriptMessageIndex++;
                prepareUserToTypeScriptMessage(); // Move to next script item or prepare for user input
            }, 1000 + currentScriptItem.message.length * 20);
        }
    }

    // Ends the script mode and allows free typing
    function endScript() {
        scriptActive = false;
        hideTypingIndicator(); // Ensure indicator is hidden
        messageInput.value = '';
        messageInput.disabled = false;
        sendButton.style.pointerEvents = 'auto';
        sendButton.style.opacity = '1';
        adjustTextareaHeight();
        messageInput.focus();
    }

    // --- Event Handlers ---

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText === '' && !scriptActive) {
            alert('Please enter a message before sending.');
            return;
        }

        if (scriptActive) {
            const currentScriptItem = chatScript[scriptMessageIndex];
            if (currentScriptItem.sender === 'seller') { // This is a user-typed script message
                if (messageText === currentScriptItem.message) {
                    addMessage('user name', messageText, true);
                    messageInput.value = '';
                    adjustTextareaHeight();
                    scriptMessageIndex++;
                    sendButton.style.pointerEvents = 'auto';
                    sendButton.style.opacity = '1';
                    prepareUserToTypeScriptMessage();
                } else {
                    alert('Please "type" the entire scripted message by pressing keys, then press Enter.');
                    messageInput.focus();
                    return;
                }
            }
        } else { // Free chat after script ends
            addMessage('user name', messageText, true);
            messageInput.value = '';
            adjustTextareaHeight();

            // Random seller response
            showTypingIndicator(); // Show typing indicator for random response
            setTimeout(() => {
                hideTypingIndicator(); // Hide indicator before adding message
                const randomIndex = Math.floor(Math.random() * randomSellerResponses.length);
                const sellerResponse = randomSellerResponses[randomIndex];
                addMessage('seller name', sellerResponse, false);
            }, 800);
        }
    }

    // Keyboard listener for typing script messages
    document.addEventListener('keydown', (event) => {
        if (scriptActive && scriptMessageIndex < chatScript.length) {
            const currentScriptItem = chatScript[scriptMessageIndex];
            if (currentScriptItem.sender === 'seller') { // It's the user's turn to "type"
                if (currentTypingCharIndex < currentScriptItem.message.length) {
                    if (!event.metaKey && !event.ctrlKey && !event.altKey && event.key !== 'Shift' && event.key !== 'CapsLock') {
                        event.preventDefault();
                        messageInput.value += currentScriptItem.message[currentTypingCharIndex];
                        currentTypingCharIndex++;
                        adjustTextareaHeight();
                        if (currentTypingCharIndex === currentScriptItem.message.length) {
                            sendButton.style.pointerEvents = 'auto';
                            sendButton.style.opacity = '1';
                        }
                    }
                } else if (event.key === 'Enter' && !event.shiftKey) {
                    sendMessage();
                } else {
                    event.preventDefault();
                }
            }
        }
    });

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for 'Enter' key in the textarea (without Shift)
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            if (!scriptActive || currentTypingCharIndex === chatScript[scriptMessageIndex].message.length) {
                event.preventDefault();
                sendMessage();
            }
        }
    });

    // Event listener to adjust textarea height on input
    messageInput.addEventListener('input', adjustTextareaHeight);

    // Initial setup
    adjustTextareaHeight();
    // Removed initializeTypingIndicator()
    prepareUserToTypeScriptMessage(); // Start the scripted chat automatically on load
});