var Robot = (function(W){
	var htmlEncode = function(str){
		var s = "";   
		if (str.length == 0) return "";
		s = str.replace(/\'/g, '&#39;');
		s = s.replace(/\"/g, '&quot;');
		s = s.replace(/\>/g, '&gt;');
		s = s.replace(/\</g, '&lt;');
		return s; 
	};
	var _isMobile = false										//手机
		, _isPad = false										//平板
		, _isIphone = false;									//iPhone
	var _loadJs = function(src, success, error){
		var script = document.createElement("script")
			, head = document.getElementsByTagName("head")[0]
			, isload = false;
		script.type = "text/javascript";
		script.src = src;
		script.onreadystatechange = function() { 
			var r = script.readyState;
			if(!isload && (r === 'loaded' || r === 'complete')){
				isload = true;
				success && success();
				script.onreadystatechange = null;
				//head.removeChild(script);
			} 
		};
		script.onload = function(){
			if(!isload){
				isload = true;
				success && success();
				//head.removeChild(script);
			}
		};
		if(error){ script.onerror = error;};
		head.appendChild(script); 
	};
	var _emnu = function(inObj){
		var a = new Array();
		for(var i in inObj){
			a.push(i +"="+ inObj[i]);
		};
		return a.join('&');
	}
	var _jsonp = function(options,time,type){
		var o = $.extend({
			url:"",
			data:null
			, success:function(){},
			error:function(){}
		},options);
		var cb = 'JSONP'+ new Date().getTime().toString(36);
		o.data.callback = cb;
		var argument = _emnu(o.data);
		window[cb] = o.success;
		_loadJs(o.url + (o.url.indexOf('?') > 0 ? "&" : "?") + argument, function(){}, o.error);
	};
	var fuckIE = (function(){
		try{
			var browser = W.navigator.appName 
			var b_version = W.navigator.appVersion 
			var version = b_version.split(";"); 
			var trim_Version = version[1].replace(/[ ]/g,""); 
			if(browser=="Microsoft Internet Explorer" && trim_Version.match(/^MSIE[6-9]\.0$/i) !== null){ 
				return true;
			}
			return false;
		}catch(e){
			return false;
		}
	})();
	var dateFormat =  function(fmt){
		var o = {
		    "M+": this.getMonth() + 1,
		    "d+": this.getDate(),
		    "h+": this.getHours(),
		    "m+": this.getMinutes(),
		    "s+": this.getSeconds(),
		    "q+": Math.floor((this.getMonth() + 3) / 3),
		    "S": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	};
	var generateHtml = function(source){
		var html = []
			, _u = navigator.userAgent
			, _con = source.con
			, _colors = _con.colors;
		if(_u.indexOf('Android') > -1 || _u.indexOf('Linux') > -1){
			_isPad = true;
		}else if(_u.indexOf('iPhone') > -1 || _u.indexOf('iPad') > -1){
			_isPad = true;
			_isIphone = true;
			_con.ismax = true;
		};
		if(_isPad && $(window).width() < 600){
			_isMobile = true;
		};
		html.push('<div id="robot" class="robot-wrap '+ (_con.mod === 'mini' ? 'robot-mini' : _isMobile ? 'robot-mobile robot-box' : '') +'" style="'+ (_con.mod === 'mini' ? 'border-color:'+ _colors.border : '') +';position:'+ (_isPad ? 'static' : 'fixed') +';z-index:'+ _con.zindex +'">')
		html.push('<div class="robot-header" style="background-color: '+ _colors.header +';" onselectstart="return false">');
		html.push('<div class="robot-logo">');
		html.push('<img src="http://img.alicdn.com/imgextra/i3/TB1UhE3JpXXXXbaXpXXwu0bFXXX.png"/>');
		html.push('<span>'+ _con.title +'</span></div>');
		html.push('<div class="robot-header-nav">');
		if(_con.mod === 'mini'){
			html.push('<a href="'+ _con.newurl +'" target="new"><em class="robot-icon robot-icon-new"></em></a>');
			html.push('<a href="javascript:void(0);"><em class="robot-icon robot-icon-min"></em></a>');
		}else{
			if(!_isPad){
				html.push('<a href="javascript:void(0);"><em class="robot-icon robot-icon-max'+ (_con.ismax ? ' robot-icon-nor' : '') +'"></em></a>');
			};
			html.push('<a href="javascript:void(0);"><em class="robot-icon robot-icon-clo"></em></a>');
		};
		html.push('</div>');
		html.push('</div>');
		//content
		html.push('<div class="robot-content '+ (_isMobile ? 'robot-box' : '') +'">');
		if(_con.mod === 'mini'){
			html.push('<div class="robot-bar" style="background-color:'+_colors.border+';">');
			html.push('<a href="javascript:void(0);"></a>');
			html.push('</div>');
		}
		//左边区域
		html.push('<div class="robot-fl-area '+ (_isMobile ? 'robot-box robot-box-flex' : '') +'" style="'+ (!_con.showside ? 'padding-right: 0;' : '') +'">');
		html.push('<div class="robot-nano '+ (_isMobile ? 'robot-box-flex' : '') +'">');
		html.push('<div class="robot-chat"></div>');
		//html.push('<div class="robot-pane" style="display: block; opacity: 1; visibility: visible;"><div class="robot-slider" style="height: 110px; top: 502px;"></div></div>');
		html.push('</div>');
		html.push('<div class="robot-edit '+ (_isMobile ? 'robot-box' : '') +'">');
		html.push('<div class="robot-input '+ (_isMobile ? 'robot-box-flex' : '') +'">');
		html.push('<textarea class="robot-textarea" placeholder="'+ _con.placeholder +'" style="'+ (fuckIE ? 'color:#999;' : '') +'">'+ (fuckIE ? _con.placeholder : '') +'</textarea>');
		html.push('</div>');
		html.push('<div class="robot-sub" onselectstart="return false">');
		if(_con.mod == 'normal'){
			html.push('<a class="robot-btn robot-btn-close">关闭</a>');
		};
		html.push('<a class="robot-btn robot-btn-send" style="background-color:'+ _colors.button +'">发送</a>');
		html.push('</div>');
		html.push('</div>');
		html.push('</div>');
		if(_con.mod !== 'mini' && _con.showside){
			//右侧导航信息
			html.push('<div class="robot-fr-area">');
			html.push('<div class="robot-fr-nav">');
			html.push('<a href="javascript:void(0);" data-index="0" class="robot-on">常见问题</a>');
			html.push('<a href="javascript:void(0);" data-index="1">功能列表</a>');
			html.push('</div>');
			//快捷查询信息显示区域-->');
			html.push('<div class="robot-fr-content">');
			html.push('<div class="robot-fr-panel"><ul>');
			for(var i=0,list = _con.quicks,len = list.length; i<len; i++){
				html.push('<li><a href="javascript:void(0);">'+ list[i] +'</a></li>');
			};
			html.push('</ul>');
			//<li><a href="javascript:void(0);">货到哪里了，怎么不更新物流啊</a></li>
			html.push('<ol>');
			for(var i=0,list = _con.tools,len = list.length; i<len; i++){
				html.push('<li><a href="'+ list[i].href +'" target="new"><i style="background-image: url('+ list[i].icon +');"></i>'+ list[i].label +'</a></li>');
			};
			html.push('</ol></div>');
			//<li><a href="javascript:void(0);"><i></i>调戏JIMI</a></li>
			html.push('</div>');
			html.push('<ul class="robot-fr-footer">');
			html.push('<li class="robot-call"><a href="'+ _con.callUrl +'" target="new">');
			html.push('<i style="background-image:url('+ _con.callImg+');"></i>');
			html.push('<span>人工客服</span>');
			html.push('</a></li>');
			html.push('<li class="robot-code"><a href="javascript:void(0);">');
			html.push('<i style="background-image:url('+ _con.codeImg+');"></i>');
			html.push('<span>公众号</span>');
			html.push('</a></li>');
			html.push('<div class="robot-big-code"><img src="'+ _con.codeBigImg+'"/></div>')
			html.push('</ul>');
			html.push('</div>');
		}
		html.push('</div>');
		html.push('</div>');
		var $wrap = $(html.join(''));
		$('body').append($wrap);
		return $wrap;
	}
	var Robot = function(config){	
		this.con = $.extend({
			mod: 'normal'																		//显示模式，mini侧边，normal默认模式
			, ismax: false																		//初始时是否最大化窗口，normal模式时有效
			, 'minWidth': 940																	//最小宽度
			, 'minHeight': 576																	//最小高度
			, title: '竭诚为您服务' 															//头部title文本
			, quicks: []																		//快速提交问题列表
			, tools: []																			//左侧工具栏，格式{label: '文本',icon: 'icon图标地址60*60', href:'连接的地址'}
			, colors: {																			//设置颜色，header:头部颜色，border:边框颜色（mini模式下有效），button:发送按钮颜色
				'header': ''
				, 'border': ''
				, 'button': ''
			}
			, zindex: 999																		//浮动层zindex
			, showside: true																	//是否显示左边栏
			, placeholder: '请简要描述您的问题，如“退换货运费怎么算”'							//文本框提示文本
			, url: 'http://api.smartnlp.cn/cloud/robot/'										//请求的接口地址
			, newurl: '#'																		//新窗口打开的的URL[仅mini模式下有效]
			, appid: ''																			//appid
			, callImg: 'http://img.alicdn.com/imgextra/i4/TB1tMo3JpXXXXbwXVXXwu0bFXXX.png'		//客服图片　80*80像素
			, callUrl: '#'																		//点击客服图片后的链接地址
			, codeImg: 'http://img.alicdn.com/imgextra/i2/TB19_XqJFXXXXa6XXXXwu0bFXXX.png'		//二维码图片　80*80像素
			, codeBigImg: 'http://img.alicdn.com/imgextra/i1/TB197MVJpXXXXXuXVXXSutbFXXX.jpg'	//点击二维码显示的大图片　262*262像素
			, welcome: '您好'																	//机器人欢迎语
			, nick: '小智'																		//机器人名字
			, autoblur: true																	//消息发送后文本框是否自动失去焦点
		}, config);
		this.init();
	};
	Robot.prototype = {
		'con': {}
		, 'init': function(){
			var _this = this
				, _con = _this.con;
			var $wrap = _this.wrap = generateHtml(_this);
			//var $w = $(window);
			_this.chat = $('.robot-chat', $wrap);
			_this.input = $('textarea', $wrap);
			_this.view = $('.robot-nano', $wrap);
			var $bigCode = $('.robot-big-code', $wrap);
			$wrap.on('click', '.robot-fr-nav a', $.proxy(_this.tab, _this))
			.on('click', '.robot-icon-max,.robot-bar a,.robot-icon-min', $.proxy(_this['zoom'], _this))
			.on('click', '.robot-btn-send', $.proxy(_this['submit'], _this))
			.on('click', '.robot-fr-panel ul a', function(){_this.send($(this).text());})
			.on('click', '.robot-code a', function(){
				$bigCode.show().stop().animate({width: 220,height: 220});
			})
			.on('click', '.robot-icon-clo,.robot-btn-close', function(){
				if(confirm('确定要关闭当前聊天窗口？')){
					W.close();
				}
			});
			$bigCode.click(function(){
				$bigCode.stop().animate({width: 80,height: 80}, function(){
					$bigCode.hide();
				});
			})
			_this.input.on({
				'keyup': function(e){
					e = e || W.event;
					var currKey = e.keyCode || e.which || e.charCode;
					if(currKey == "13"){
						return _this.submit();
					};
				}
				, 'blur': function(e){
					if(fuckIE){
						if(this.value === _con.placeholder || this.value === ''){
							this.value = _con.placeholder;
							this.style.color = '#999';
						};
					}
				}
				, 'focus': function(){
					if(fuckIE){
						if(this.value === _con.placeholder){
							this.value = '';
						};
						this.style.color = 'inherit';
					};
					if(_isIphone && _isMobile){
						//var oldheight = $w.height();
						setTimeout(function(){
							 $('body').scrollTop(500)
						}, 500);
						
					}
				}
			});
			_this.welcome();
			_this.resize();
			$(W).resize($.proxy(_this.resize, this));
		}
		, welcome: function(){
			this.chat.append('<div class="robot-chat-replay"><div class="robot-chat-headimg"><span>小智 '+ dateFormat.call(new Date(),'hh:mm:ss') +'</span></div><table class="robot-msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="bg-msg-lr robot-msg-lt"></td><td class="bg-msg-tb robot-msg-tt"></td><td class="bg-msg-lr robot-msg-rt"></td></tr><tr><td class="bg-msg-lr robot-msg-lm"><span class="bg-msg-lr"></span></td><td class="robot-msg-mm"><span>'+ this.con.welcome +'</span></td><td class="bg-msg-lr robot-msg-rm"></td></tr><tr><td class="bg-msg-lr robot-msg-lb"></td><td class="bg-msg-tb robot-msg-bm"></td><td class="bg-msg-lr robot-msg-rb"></td></tr><tr><td></td></tr></tbody></table></div>');
			this.scroll();
		}
		, 'tab': function(e){
			var _this = this
				, $ele = $(e.target)
				, _index = $ele.data('index');
			if($ele.hasClass('robot-on')){
				return false;
			};
			$ele.addClass('robot-on').siblings('a').removeClass('robot-on');
			$('.robot-fr-content', _this.wrap).stop().animate({scrollLeft: parseInt(_index) * 350}, 300);
		}
		, 'submit': function(){
			var _this = this
				, _input = _this.input
				, _val = _input.val();
			if(_val === ''){
				return;
			};
			_this.send(_val);
			/*if(fuckIE){
				_input.val(_input.attr('placeholder')).css('color','#999');
			}else{
				_input.val('');
			};*/
			_input.val('');
			if(_isMobile && _this.con.autoblur){
				_input.trigger("blur");
			};
		}
		, 'zoom': function(e){
			var _this = this
				, _con = _this.con
				, $ele = $(e.target)
			if(_con.mod === 'mini'){
				_con.ismax = !_con.ismax;
				_this.wrap.animate({right: _con.ismax ? 0 : -288});
			}else{
				_con.ismax = !$ele.hasClass('robot-icon-nor');
				$ele.toggleClass('robot-icon-nor');
				_this.resize();
			};
		}
		, 'scroll': function(){
			var _this = this;
			_this.view.scrollTop(_isMobile ? 100000 : _this.chat.height() - _this.view.height() + 20);
		}
		, 'send': function(text){
			if(!text || typeof text !== 'string'){
				return;
			};
			text = text.replace(/\ /g,'');
			if(text == ""){
				return false;
			}
			var _this = this
				, _con = _this.con;
			var $question = $('<div class="robot-chat-ask"><div class="robot-chat-headimg"><span>我 '+ dateFormat.call(new Date(),'hh:mm:ss') +'&nbsp;</span></div><table class="robot-msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="robot-msg-lt bg-msg-lr"></td><td class="robot-msg-tt bg-msg-tb"></td><td class="robot-msg-rt bg-msg-lr"></td></tr><tr><td class="robot-msg-lm bg-msg-lr"></td><td class="robot-msg-mm">'+ htmlEncode(text) +'</td><td class="robot-msg-rm bg-msg-lr"><span class="bg-msg-lr"></span></td></tr><tr><td class="robot-msg-lb bg-msg-lr"></td><td class="robot-msg-bm bg-msg-tb"></td><td class="robot-msg-rb bg-msg-lr"></td></tr></tbody></table></div>')
				, $answer = $('<div class="robot-chat-replay"><div class="robot-chat-headimg"><span>'+ _con.nick +' '+ dateFormat.call(new Date(),'hh:mm:ss') +'</span></div><table class="robot-msg" cellspacing="0" cellpadding="0"><tbody><tr><td class="bg-msg-lr robot-msg-lt"></td><td class="bg-msg-tb robot-msg-tt"></td><td class="bg-msg-lr robot-msg-rt"></td></tr><tr><td class="bg-msg-lr robot-msg-lm"><span class="bg-msg-lr"></span></td><td class="robot-msg-mm"><span><img src="http://img.alicdn.com/imgextra/i3/TB1tAEJJpXXXXXraXXXtKXbFXXX.gif"/></span></td><td class="bg-msg-lr robot-msg-rm"></td></tr><tr><td class="bg-msg-lr robot-msg-lb"></td><td class="bg-msg-tb robot-msg-bm"></td><td class="bg-msg-lr robot-msg-rb"></td></tr><tr><td></td></tr></tbody></table></div>');
			_this.chat.append($question).append($answer);
			_this.scroll();
			//console.log( _con.url + _con.appid +'/answer');
			_jsonp({
				'url': _con.url + _con.appid +'/answer'
				, 'data' : {'q': encodeURIComponent(text)}
				,'success': function(data){
					$('.robot-msg-mm span', $answer).html(data.answer+'&nbsp;');
					$('.robot-chat-headimg span', $answer).text(_con.nick +' '+ dateFormat.call(new Date(),'hh:mm:ss'));
					_this.scroll();
				}
				, 'error': function(){
					$('.robot-msg-mm span', $answer).html('会话丢失');
				}
			})
		}
		, 'resize': function(){
			var $w = $(W)
				, _this = this
				, _con = _this.con;
			var _w = $w.width()
				, _h = $w.height()
				, _mw = _con.minWidth
				, _mh = _con.minHeight
				, _ismax = _con.ismax;
			if(_con.mod === 'mini'){
				_this.wrap.height(_h);
				_this.view.height(_h - 157);
			}else{
				var _h2 = _ismax ? (_h > _mh ? _h : _mh) : (_h > _mh ? _mh : _h) 
					, _w2 = _ismax ? (_w > _mw ? _w : _mw) : _mw;
				if(!_isMobile){
					_this.view.height(_h2 - 136);
					_this.wrap.css({
						'height': _isMobile ? _h : _h2
						, 'width': _isMobile ? _w : _w2
						, 'top': _ismax ? 0 : (_h > _mh ? parseInt((_h - _mh) / 2) : 0)
						, 'left': _ismax ? 0 : (_w > _mw ? parseInt((_w - _mw) / 2) : 0)
					});
					$('.robot-fr-content', _this.wrap).height(_h2 - 240);
					$('.robot-fr-area', _this.wrap).height(_h2 - 46);
					$('body').css('overflow',_ismax ? 'hidden' : 'auto');
				}else{
					$('body').css('overflow','hidden');
				};
			}
			_this.scroll();
		}
	};
	var test = 0;
	return Robot;
})(this);