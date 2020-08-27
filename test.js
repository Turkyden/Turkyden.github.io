function editTask(id, params) {
  let buttons = [{
      btnname: "结束任务",
      callfun: "saveDialog"
    },
    {
      btnname: "关闭",
      callfun: "ModeList.closeCustomDialog"
    },
  ];
  let style = {
    width: window.innerWidth * 0.8,
    height: 600
  };
  let prop = {
    title: "结束任务",
    url: "/spa/cube/index.html#/main/cube/card?billid=" +
      id +
      "&type=2&modeId=769&layoutid=3050&hidetop=1",
    style: style,
  };
  ModeList.openCustomDialog(prop, buttons);
}