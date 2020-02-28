'ui';
ui.layout(
    <vertical>
        <radiogroup orientation="vertical">
            <radio id="cb1" text="单选框1"/>
            <radio id="cb2" text="单选框2"/>
        </radiogroup>
        
    </vertical>
);
ui.cb1.on('check',(checked) => {
    if (checked) {
        toast(1)
    }
})
ui.cb2.on('check',(checked) => {
    if (checked) {
        toast(2)
    }
})

