/**
 * Web Robot 聊天机器人
 * 纯前端实现，支持聊天记录导出功能
 */

(function(window, document) {
    'use strict';

    // ==================== 配置项 ====================
    var config = {
        botName: '智能助手',
        userName: '我',
        botAvatar: '🤖',
        userAvatar: '😊',
        welcomeMessage: '你好！我是智能助手，有什么可以帮助你的吗？',
        typingDelay: 500,  // 模拟打字延迟
        maxHistory: 100    // 最大历史记录数
    };

    // ==================== 聊天记录存储 ====================
    var chatHistory = [];

    // ==================== DOM 元素 ====================
    var elements = {};

    // ==================== 工具函数 ====================
    
    /**
     * 获取当前时间字符串
     */
    function getCurrentTime() {
        var now = new Date();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        return hours + ':' + minutes;
    }

    /**
     * 获取完整时间字符串（用于导出）
     */
    function getFullTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = String(now.getMonth() + 1).padStart(2, '0');
        var day = String(now.getDate()).padStart(2, '0');
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }

    /**
     * 生成唯一ID
     */
    function generateId() {
        return 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * 转义HTML特殊字符
     */
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * 显示提示消息
     */
    function showToast(message) {
        var existingToast = document.querySelector('.robot-toast');
        if (existingToast) {
            existingToast.remove();
        }

        var toast = document.createElement('div');
        toast.className = 'robot-toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(function() {
            toast.remove();
        }, 2000);
    }

    // ==================== 聊天功能 ====================

    /**
     * 初始化 DOM 元素引用
     */
    function initElements() {
        elements.container = document.getElementById('robot-container');
        elements.chat = document.getElementById('robot-chat');
        elements.messages = document.getElementById('robot-messages');
        elements.input = document.getElementById('robot-input');
        elements.sendBtn = document.getElementById('robot-send');
        elements.floatBtn = document.getElementById('robot-float-btn');
        elements.closeBtn = document.getElementById('btn-close');
        elements.clearBtn = document.getElementById('btn-clear');
        elements.exportBtn = document.getElementById('btn-export');
        elements.toolbar = document.getElementById('robot-toolbar');
        elements.exportModal = document.getElementById('export-modal');
        elements.modalClose = document.getElementById('modal-close');
        elements.welcomeTime = document.getElementById('welcome-time');
    }

    /**
     * 添加消息到界面
     */
    function addMessageToUI(content, isUser, timestamp) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'robot-message ' + (isUser ? 'robot-message-user' : 'robot-message-bot');
        messageDiv.dataset.id = generateId();

        var avatar = isUser ? config.userAvatar : config.botAvatar;
        var time = timestamp || getCurrentTime();

        messageDiv.innerHTML = 
            '<div class="robot-avatar">' + avatar + '</div>' +
            '<div class="robot-bubble">' +
                '<div class="robot-content">' + escapeHtml(content) + '</div>' +
                '<div class="robot-time">' + time + '</div>' +
            '</div>';

        elements.messages.appendChild(messageDiv);
        scrollToBottom();

        return {
            id: messageDiv.dataset.id,
            content: content,
            isUser: isUser,
            time: time,
            fullTime: getFullTime()
        };
    }

    /**
     * 添加加载动画
     */
    function addTypingIndicator() {
        var typingDiv = document.createElement('div');
        typingDiv.className = 'robot-message robot-message-bot robot-typing-indicator';
        typingDiv.innerHTML = 
            '<div class="robot-avatar">' + config.botAvatar + '</div>' +
            '<div class="robot-bubble">' +
                '<div class="robot-content robot-typing">' +
                    '<span></span><span></span><span></span>' +
                '</div>' +
            '</div>';

        elements.messages.appendChild(typingDiv);
        scrollToBottom();

        return typingDiv;
    }

    /**
     * 移除加载动画
     */
    function removeTypingIndicator() {
        var indicator = elements.messages.querySelector('.robot-typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    /**
     * 滚动到底部
     */
    function scrollToBottom() {
        elements.messages.scrollTop = elements.messages.scrollHeight;
    }

    /**
     * 模拟机器人回复
     */
    function getBotResponse(userMessage) {
        var responses = [
            '收到你的消息："' + userMessage + '"，我会尽快为你处理。',
            '这是一个很好的问题！关于"' + userMessage + '"，我需要更多信息来帮助你。',
            '我理解你的需求。关于"' + userMessage + '"，建议你可以尝试以下方案...',
            '谢谢你的咨询！关于"' + userMessage + '"，我的建议是保持关注。',
            '已记录你的问题："' + userMessage + '"，我们会持续改进服务。'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    /**
     * 发送消息
     */
    function sendMessage() {
        var content = elements.input.value.trim();
        if (!content) return;

        // 添加用户消息
        var userMsg = addMessageToUI(content, true);
        chatHistory.push(userMsg);

        // 清空输入框
        elements.input.value = '';
        elements.input.style.height = 'auto';

        // 显示加载动画
        var typingIndicator = addTypingIndicator();

        // 模拟机器人回复
        setTimeout(function() {
            removeTypingIndicator();
            var botResponse = getBotResponse(content);
            var botMsg = addMessageToUI(botResponse, false);
            chatHistory.push(botMsg);

            // 限制历史记录数量
            if (chatHistory.length > config.maxHistory * 2) {
                chatHistory = chatHistory.slice(-config.maxHistory * 2);
            }
        }, config.typingDelay + Math.random() * 500);
    }

    /**
     * 清空聊天记录
     */
    function clearChat() {
        if (chatHistory.length === 0) {
            showToast('聊天记录已为空');
            return;
        }

        if (confirm('确定要清空所有聊天记录吗？')) {
            elements.messages.innerHTML = '';
            chatHistory = [];

            // 重新添加欢迎消息
            var welcomeMsg = addMessageToUI(config.welcomeMessage, false);
            chatHistory.push(welcomeMsg);

            showToast('聊天记录已清空');
        }
    }

    // ==================== 导出功能 ====================

    /**
     * 导出为 TXT 格式
     */
    function exportAsTxt() {
        if (chatHistory.length === 0) {
            showToast('没有可导出的聊天记录');
            return;
        }

        var content = '聊天记录导出\n';
        content += '==================\n';
        content += '导出时间：' + getFullTime() + '\n';
        content += '消息数量：' + chatHistory.length + '\n';
        content += '==================\n\n';

        chatHistory.forEach(function(msg) {
            var sender = msg.isUser ? config.userName : config.botName;
            content += '[' + msg.fullTime + '] ' + sender + ':\n';
            content += msg.content + '\n\n';
        });

        downloadFile(content, 'chat_history_' + getFileTimestamp() + '.txt', 'text/plain;charset=utf-8');
        showToast('已导出为 TXT 格式');
        closeExportModal();
    }

    /**
     * 导出为 JSON 格式
     */
    function exportAsJson() {
        if (chatHistory.length === 0) {
            showToast('没有可导出的聊天记录');
            return;
        }

        var exportData = {
            exportTime: getFullTime(),
            messageCount: chatHistory.length,
            messages: chatHistory.map(function(msg) {
                return {
                    id: msg.id,
                    sender: msg.isUser ? config.userName : config.botName,
                    content: msg.content,
                    timestamp: msg.fullTime,
                    isUser: msg.isUser
                };
            })
        };

        var content = JSON.stringify(exportData, null, 2);
        downloadFile(content, 'chat_history_' + getFileTimestamp() + '.json', 'application/json;charset=utf-8');
        showToast('已导出为 JSON 格式');
        closeExportModal();
    }

    /**
     * 获取文件时间戳
     */
    function getFileTimestamp() {
        var now = new Date();
        return now.getFullYear() +
            String(now.getMonth() + 1).padStart(2, '0') +
            String(now.getDate()).padStart(2, '0') + '_' +
            String(now.getHours()).padStart(2, '0') +
            String(now.getMinutes()).padStart(2, '0');
    }

    /**
     * 下载文件
     */
    function downloadFile(content, filename, mimeType) {
        var blob = new Blob([content], { type: mimeType });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * 打开导出弹窗
     */
    function openExportModal() {
        elements.exportModal.classList.add('active');
    }

    /**
     * 关闭导出弹窗
     */
    function closeExportModal() {
        elements.exportModal.classList.remove('active');
    }

    // ==================== 界面控制 ====================

    /**
     * 打开聊天窗口
     */
    function openChat() {
        elements.chat.classList.add('active');
        elements.floatBtn.classList.add('hidden');
        scrollToBottom();
    }

    /**
     * 关闭聊天窗口
     */
    function closeChat() {
        elements.chat.classList.remove('active');
        elements.floatBtn.classList.remove('hidden');
    }

    /**
     * 自动调整输入框高度
     */
    function autoResizeTextarea() {
        elements.input.style.height = 'auto';
        elements.input.style.height = Math.min(elements.input.scrollHeight, 120) + 'px';
    }

    // ==================== 事件绑定 ====================

    function bindEvents() {
        // 悬浮按钮点击
        elements.floatBtn.addEventListener('click', openChat);

        // 关闭按钮点击
        elements.closeBtn.addEventListener('click', closeChat);

        // 发送按钮点击
        elements.sendBtn.addEventListener('click', sendMessage);

        // 输入框回车发送
        elements.input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        // 输入框自动调整高度
        elements.input.addEventListener('input', autoResizeTextarea);

        // 清空按钮点击
        elements.clearBtn.addEventListener('click', clearChat);

        // 导出按钮点击
        elements.exportBtn.addEventListener('click', openExportModal);

        // 弹窗关闭按钮
        elements.modalClose.addEventListener('click', closeExportModal);

        // 弹窗外部点击关闭
        elements.exportModal.addEventListener('click', function(e) {
            if (e.target === elements.exportModal) {
                closeExportModal();
            }
        });

        // 导出选项按钮
        var exportBtns = elements.exportModal.querySelectorAll('.export-btn');
        exportBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var format = this.dataset.format;
                if (format === 'txt') {
                    exportAsTxt();
                } else if (format === 'json') {
                    exportAsJson();
                }
            });
        });

        // 工具栏按钮
        var toolbarBtns = elements.toolbar.querySelectorAll('.toolbar-btn');
        toolbarBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var action = this.dataset.action;
                if (action === 'export-txt') {
                    exportAsTxt();
                } else if (action === 'export-json') {
                    exportAsJson();
                }
            });
        });

        // ESC 键关闭弹窗
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeExportModal();
            }
        });
    }

    // ==================== 初始化 ====================

    function init() {
        initElements();
        bindEvents();

        // 设置欢迎消息时间
        if (elements.welcomeTime) {
            elements.welcomeTime.textContent = getCurrentTime();
        }

        // 记录欢迎消息到历史
        chatHistory.push({
            id: generateId(),
            content: config.welcomeMessage,
            isUser: false,
            time: getCurrentTime(),
            fullTime: getFullTime()
        });

        console.log('Web Robot 已初始化');
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 暴露全局接口
    window.WebRobot = {
        config: config,
        getHistory: function() {
            return chatHistory.slice();
        },
        clearHistory: clearChat,
        exportTxt: exportAsTxt,
        exportJson: exportAsJson,
        sendMessage: function(content) {
            elements.input.value = content;
            sendMessage();
        }
    };

})(window, document);
