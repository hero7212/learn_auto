'ui';
ui.layout(
    <vertical>
        <button text="带颜色的按钮" style="Widget.AppCompat.Button.Colored"/>
        <button text="无边框按钮" style="Widget.AppCompat.Button.Borderless"/>
        <button text="带颜色的无边框按钮" style="Widget.AppCompat.Button.Borderless.Colored"/>
        <text color="#ff0000" bg="#000000" textSize="30sp" id="ik" lines="3" text="本软件仅供学习与交流，请勿用于非法途径，如被人用于非法途径与本人无关。"/>

        <input hint="请输入激活码" password="true"/>
        <button text="开始脚本"/>
    </vertical>

)

ui.ik.setText("朱莉\n第二行\n第三行");
