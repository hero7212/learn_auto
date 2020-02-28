
'ui';
ui.layout(
    <vertical>
        <text textSize="16sp" textColor="black" text="请输入话术"/>
        <input id="n" text=""/>
        <button id="ok" text="开始启动脚本"/>

    </vertical>

);

ui.ok.click(function() {

    toastLog("启动脚本");
    threads.start(lan);
})

function lan() {
    toastLog("启动脚本");
    sleep(1500);
    launchApp("抖音短视频");
    sleep(4500);
    var i = device.height / 1.2;
    log(i);
    var u = device.height / 4;
    log(u);
    swipe(500, i, 500, u, 400);
    sleep(2000);
    id('y2').findOne().click();
    sleep(2000);
    id('ass').findOne().click();
    sleep(2000);
    var r = ui.n.getText();

    setText(r);
}

