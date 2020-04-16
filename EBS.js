/**/

function DoIt(){
   // videoTime is string type.
    const lctreSn = Number($("#lctreSn").val())
    let atn = $("#atnlcNo").val();
    let step = $("#stepSn").val();
    let sc = $("#lctreSeCode").val();
    let ct = $("#cntntsTyCode").val();
    let AllowTime = timeToSeconds($(".vjs-duration-display").val());
    let headers = {}
    headers.atnlcNo=atn;
    headers.lctreSn = lctreSn;
    headers.stepSn = step;
    headers.lctreSeCode = sc;
    headers.cntntsTyCode = ct;
    headers.revivTime = AllowTime;
    headers.endButtonYn = "Y";
    headers.lastRevivLc = AllowTime;
    headers.lrnTime = AllowTime;
    fncPost("/mypage/userlrn/lctreLrnSave.do", headers, function(){
           console.log("Post OK!")
    });
}    