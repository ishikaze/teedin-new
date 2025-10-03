document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const messageInput = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('#send-btn');
    const typeField = chatContainer.querySelector('.type-field');
    const userNameElement = chatContainer.querySelector('.user-name'); // Not directly used in display logic, but good to keep
    const sellerNameElement = chatContainer.querySelector('.seller-name'); // Not directly used in display logic, but good to keep

    let scriptActive = true;
    let scriptMessageIndex = 0;
    let currentTypingCharIndex = 0;

    const chatScript = [
        { sender: 'seller', message: 'สวัสดีครับ วิลล่าที่ติดทะเลมีขายอยู่ไหมครับ' },
        { sender: 'user', message: 'สวัสดีครับ ยังมีอยู่ครับ ตอนนี้มีโปรโมชั่นราคาพิเศษด้วยนะครับ สนใจนัดดูโครงการหรือดูห้องจริงได้เลยครับ' },
        { sender: 'seller', message: 'ได้ครับ อยากนัดดูวันเสาร์นี้ มีรอบว่างช่วงบ่ายไหมครับ' },
        { sender: 'user', message: 'มีครับ ผมจองให้วันเสาร์เวลา 14:00 น.นะครับ ถ้าต้องการบริการรถรับ-ส่ง แจ้งเพิ่มเติมได้ครับ' }
    ];

    const randomSellerResponses = [
        "ครับผม",
        "โอเคครับ"
    ];

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

        chatContainer.insertBefore(messageDiv, typeField);
        scrollToTypeField();
    }

    function scrollToTypeField() {
        typeField.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function adjustTextareaHeight() {
        messageInput.style.height = 'auto';
        messageInput.style.height = (messageInput.scrollHeight) + 'px';
    }

    function prepareUserToTypeScriptMessage() {
        if (!scriptActive || scriptMessageIndex >= chatScript.length) {
            endScript();
            return;
        }

        const currentScriptItem = chatScript[scriptMessageIndex];

        if (currentScriptItem.sender === 'seller') { 
            messageInput.value = ''; 
            currentTypingCharIndex = 0; 
            messageInput.disabled = false; 
            sendButton.style.pointerEvents = 'none'; 
            sendButton.style.opacity = '0.5';
            messageInput.focus();
        } else {
            messageInput.disabled = true;
            sendButton.style.pointerEvents = 'none';
            sendButton.style.opacity = '0.5';

            setTimeout(() => {
                addMessage('seller name', currentScriptItem.message, false);
                scriptMessageIndex++;
                prepareUserToTypeScriptMessage();
            }, 1000 + currentScriptItem.message.length * 20);
        }
    }

    function endScript() {
        scriptActive = false;
        messageInput.value = '';
        messageInput.disabled = false;
        sendButton.style.pointerEvents = 'auto';
        sendButton.style.opacity = '1';
        adjustTextareaHeight();
        messageInput.focus();
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText === '' && !scriptActive) {
            alert('Please enter a message before sending.');
            return;
        }

        if (scriptActive) {
            const currentScriptItem = chatScript[scriptMessageIndex];
            if (currentScriptItem.sender === 'seller') { 
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
        } else {
            addMessage('user name', messageText, true);
            messageInput.value = '';
            adjustTextareaHeight();

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * randomSellerResponses.length);
                const sellerResponse = randomSellerResponses[randomIndex];
                addMessage('seller name', sellerResponse, false);
            }, 800);
        }
    }

    document.addEventListener('keydown', (event) => {
        if (scriptActive && scriptMessageIndex < chatScript.length) {
            const currentScriptItem = chatScript[scriptMessageIndex];
            if (currentScriptItem.sender === 'seller') {
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


    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            if (!scriptActive || currentTypingCharIndex === chatScript[scriptMessageIndex].message.length) {
                event.preventDefault();
                sendMessage();
            }
        }
    });

    messageInput.addEventListener('input', adjustTextareaHeight);

    adjustTextareaHeight();
    prepareUserToTypeScriptMessage();
});