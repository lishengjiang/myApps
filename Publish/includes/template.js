// JavaScript Document
// Written by Chris Converse, Codify Design Studio

var autoPlay = true;
var photoWidth = 980;
var photoHeight = 325;
var currentPanel = 1;
var totalPanels = 0;
//var timeToChange = 5;
var timePassed = 0;
var marqueeMode = '';
var marqueeInterval = '';
var panelTransitionTime = 1000;
var captionTtransitionTime = 500;
var debugMode = 'off';

$(document).ready(function() {
	
	// Add debug code
	if(window.debugMode=='on'){
		$('.marquee_container').after('<div class="debug"><span class="autoPlay"></span><br/><span class="currentPanel"></span><br/><span class="totalPanels"></span><br/><span class="timePassed"></span><br/><span class="timeToChange"></span><br/><span class="marqueeMode"></span><br/></div>');
	}
	if(window.transitionTime!=''){
		window.panelTransitionTime = window.transitionTime*1000;
		window.captionTtransitionTime = (window.transitionTime*1000)/2;
	}
	loadMarqueeData();

});

function loadMarqueeData(){
	
	// Reset HTML in marquee
	$('.marquee_photos').html('');
	$('.marquee_nav').html('');
	
	// Test window width to load data
	if($(window).width()>550){
		$.ajax({
			url: 'homepage_marquee/marquee_panels.html',
			context: document.body,
			success: function(data){
				$('.marquee_panel_data').html(data);
				setUpMarquee();
			}
		});
		window.marqueeMode = 'marquee';
		timePassed = 0;
	}else{
		$.ajax({
			url: 'homepage_marquee/marquee_panel_smallscreen.html',
			context: document.body,
			success: function(data){
				$('.marquee_smallscreen').html(data);
				setUpMarquee();
			}
		});
		window.marqueeMode = 'smallscreen';
	}
	if (window.marqueeInterval == ''){
		window.marqueeInterval = setInterval(autoAdvance, 1000);
	}
}


// Begin Marquee Script - (protected script)
// Learn to create a marquee from scratch with a step-by-step class available on lynda.com/chrisconverse
// Get a free 7-day trial to lynda.com at http://smartnocities.com/get-a-7-day-free-trial-to-lynda-com/

var _0x6308=["\x64\x65\x62\x75\x67\x4D\x6F\x64\x65","\x6F\x6E","\x61\x75\x74\x6F\x50\x6C\x61\x79\x20\x3D\x20","\x61\x75\x74\x6F\x50\x6C\x61\x79","\x68\x74\x6D\x6C","\x2E\x64\x65\x62\x75\x67\x20\x2E\x61\x75\x74\x6F\x50\x6C\x61\x79","\x74\x69\x6D\x65\x50\x61\x73\x73\x65\x64\x20\x3D\x20","\x74\x69\x6D\x65\x50\x61\x73\x73\x65\x64","\x2E\x64\x65\x62\x75\x67\x20\x2E\x74\x69\x6D\x65\x50\x61\x73\x73\x65\x64","\x74\x69\x6D\x65\x54\x6F\x43\x68\x61\x6E\x67\x65\x20\x3D\x20","\x74\x69\x6D\x65\x54\x6F\x43\x68\x61\x6E\x67\x65","\x2E\x64\x65\x62\x75\x67\x20\x2E\x74\x69\x6D\x65\x54\x6F\x43\x68\x61\x6E\x67\x65","\x63\x75\x72\x72\x65\x6E\x74\x50\x61\x6E\x65\x6C\x20\x3D\x20","\x63\x75\x72\x72\x65\x6E\x74\x50\x61\x6E\x65\x6C","\x2E\x64\x65\x62\x75\x67\x20\x2E\x63\x75\x72\x72\x65\x6E\x74\x50\x61\x6E\x65\x6C","\x6D\x61\x72\x71\x75\x65\x65\x4D\x6F\x64\x65\x20\x3D\x20","\x6D\x61\x72\x71\x75\x65\x65\x4D\x6F\x64\x65","\x2E\x64\x65\x62\x75\x67\x20\x2E\x6D\x61\x72\x71\x75\x65\x65\x4D\x6F\x64\x65","\x61\x75\x74\x6F\x70\x6C\x61\x79","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x61\x64\x64\x43\x6C\x61\x73\x73","\x68\x6F\x76\x65\x72","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x5F\x69\x74\x65\x6D\x22\x20\x3E\x3C\x2F\x61\x3E","\x61\x70\x70\x65\x6E\x64","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76","\x74\x6F\x74\x61\x6C\x50\x61\x6E\x65\x6C\x73\x20\x3D\x20","\x2E\x64\x65\x62\x75\x67\x20\x2E\x74\x6F\x74\x61\x6C\x50\x61\x6E\x65\x6C\x73","\x65\x61\x63\x68","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x64\x61\x74\x61\x20\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C","\x70\x68\x6F\x74\x6F\x57\x69\x64\x74\x68","\x3C\x69\x6D\x67\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x68\x6F\x74\x6F\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6C\x65\x66\x74\x3A\x20","\x70\x78\x22\x20\x73\x72\x63\x3D\x22","\x73\x72\x63","\x61\x74\x74\x72","\x22\x20\x61\x6C\x74\x3D\x22","\x61\x6C\x74","\x22\x20\x77\x69\x64\x74\x68\x3D\x22","\x20\x68\x65\x69\x67\x68\x74\x3D\x22","\x70\x68\x6F\x74\x6F\x48\x65\x69\x67\x68\x74","\x22\x20\x2F\x3E","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x68\x6F\x74\x6F\x73","\x77\x69\x64\x74\x68","\x63\x73\x73","\x69\x6D\x67\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x70\x68\x6F\x74\x6F","\x73\x65\x6C\x65\x63\x74\x65\x64","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x20\x61\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x5F\x69\x74\x65\x6D","\x69\x6E\x64\x65\x78","\x70\x78","\x67\x65\x74","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x63\x61\x70\x74\x69\x6F\x6E","\x70\x61\x6E\x65\x6C\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x54\x69\x6D\x65","\x61\x6E\x69\x6D\x61\x74\x65","\x63\x61\x70\x74\x69\x6F\x6E\x54\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x54\x69\x6D\x65","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x63\x61\x70\x74\x69\x6F\x6E\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x63\x61\x70\x74\x69\x6F\x6E","\x63\x6C\x69\x63\x6B","\x69\x6D\x67\x70\x72\x65\x6C\x6F\x61\x64","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x64\x61\x74\x61\x20\x69\x6D\x67","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x64\x61\x74\x61\x20\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x3A\x66\x69\x72\x73\x74\x20\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x70\x61\x6E\x65\x6C\x5F\x63\x61\x70\x74\x69\x6F\x6E","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x20\x61\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x5F\x69\x74\x65\x6D\x3A\x66\x69\x72\x73\x74","\x66\x61\x64\x65\x49\x6E","\x68\x65\x69\x67\x68\x74","\x64\x65\x6C\x61\x79","\x6D\x61\x72\x71\x75\x65\x65","\x73\x6D\x61\x6C\x6C\x73\x63\x72\x65\x65\x6E","\x74\x6F\x74\x61\x6C\x50\x61\x6E\x65\x6C\x73","\x74\x72\x69\x67\x67\x65\x72","\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x20\x61\x2E\x6D\x61\x72\x71\x75\x65\x65\x5F\x6E\x61\x76\x5F\x69\x74\x65\x6D\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28","\x29"];function setUpMarquee(){if(window[_0x6308[0]]==_0x6308[1]){$(_0x6308[5])[_0x6308[4]](_0x6308[2]+window[_0x6308[3]]);$(_0x6308[8])[_0x6308[4]](_0x6308[6]+window[_0x6308[7]]);$(_0x6308[11])[_0x6308[4]](_0x6308[9]+window[_0x6308[10]]);$(_0x6308[14])[_0x6308[4]](_0x6308[12]+window[_0x6308[13]]);$(_0x6308[17])[_0x6308[4]](_0x6308[15]+window[_0x6308[16]]);} ;$(_0x6308[22])[_0x6308[21]](function (){window[_0x6308[3]]=false;$(this)[_0x6308[19]](_0x6308[18]);} ,function (){window[_0x6308[3]]=true;window[_0x6308[7]]=0;$(this)[_0x6308[20]](_0x6308[18]);} );$(_0x6308[29])[_0x6308[28]](function (_0xf0f3x2){$(_0x6308[25])[_0x6308[24]](_0x6308[23]);totalPanels=_0xf0f3x2+1;if(window[_0x6308[0]]==_0x6308[1]){$(_0x6308[27])[_0x6308[4]](_0x6308[26]+totalPanels);} ;} );$(_0x6308[44])[_0x6308[28]](function (_0xf0f3x2){var _0xf0f3x3=_0xf0f3x2*window[_0x6308[30]];$(_0x6308[41])[_0x6308[24]](_0x6308[31]+_0xf0f3x3+_0x6308[32]+$(this)[_0x6308[34]](_0x6308[33])+_0x6308[35]+$(this)[_0x6308[34]](_0x6308[36])+_0x6308[37]+window[_0x6308[30]]+_0x6308[38]+window[_0x6308[39]]+_0x6308[40]);$(_0x6308[41])[_0x6308[43]](_0x6308[42],_0xf0f3x3+photoWidth);} );$(_0x6308[46])[_0x6308[56]](function (){$(_0x6308[46])[_0x6308[19]](_0x6308[45]);$(this)[_0x6308[20]](_0x6308[45]);var _0xf0f3x4=$(this)[_0x6308[47]]();var _0xf0f3x5=$(_0x6308[22])[_0x6308[42]]();var _0xf0f3x6=window[_0x6308[30]]*(-1);var _0xf0f3x7=_0xf0f3x4*_0xf0f3x6+_0x6308[48];var _0xf0f3x8=$(_0x6308[50])[_0x6308[49]](_0xf0f3x4);window[_0x6308[13]]=_0xf0f3x4+1;if(window[_0x6308[0]]==_0x6308[1]){$(_0x6308[14])[_0x6308[4]](_0x6308[12]+window[_0x6308[13]]);} ;$(_0x6308[41])[_0x6308[52]]({left:_0xf0f3x7},window[_0x6308[51]]);$(_0x6308[55])[_0x6308[52]]({top:window[_0x6308[39]]+_0x6308[48]},window[_0x6308[53]],function (){var _0xf0f3x9=$(_0xf0f3x8)[_0x6308[4]]();$(_0x6308[54])[_0x6308[4]](_0xf0f3x9);setCaption();} );} );$(_0x6308[58])[_0x6308[57]](function (){initializeMarquee();} );} ;function initializeMarquee(){$(_0x6308[54])[_0x6308[4]]($(_0x6308[59])[_0x6308[4]]());$(_0x6308[60])[_0x6308[20]](_0x6308[45]);$(_0x6308[41])[_0x6308[61]](1000);setCaption();} ;function setCaption(){var _0xf0f3xc=$(_0x6308[55])[_0x6308[62]]();var _0xf0f3xd=$(_0x6308[22])[_0x6308[62]]();var _0xf0f3xe=_0xf0f3xd-_0xf0f3xc-15;$(_0x6308[55])[_0x6308[63]](100)[_0x6308[52]]({top:_0xf0f3xe},window[_0x6308[53]]);} ;function autoAdvance(){if(window[_0x6308[16]]==_0x6308[64]&&$(window)[_0x6308[42]]()<550){loadMarqueeData();} ;if(window[_0x6308[16]]==_0x6308[65]&&$(window)[_0x6308[42]]()>550){loadMarqueeData();} ;if(window[_0x6308[7]]==window[_0x6308[10]]){window[_0x6308[7]]=0;if(window[_0x6308[13]]==window[_0x6308[66]]){currentPanel=0;} ;if(autoPlay==true){$(_0x6308[68]+(window[_0x6308[13]]+1)+_0x6308[69])[_0x6308[67]](_0x6308[56]);} ;} else {window[_0x6308[7]]+=1;} ;if(window[_0x6308[0]]==_0x6308[1]){$(_0x6308[8])[_0x6308[4]](_0x6308[6]+window[_0x6308[7]]);$(_0x6308[5])[_0x6308[4]](_0x6308[2]+window[_0x6308[3]]);} ;} ;

// End Marquee Script

