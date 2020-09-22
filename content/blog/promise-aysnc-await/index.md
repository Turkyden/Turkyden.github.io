#

## Promise

```js
init() {
  Toast.loading('loading...', 0);
  this.loadEm7WxSDK().then((em) => {
    this.getContext(em).then((entry) => {
      const isSingleChat = entry === 'single_chat_tools';
      if(isSingleChat) {
        this.getCurExternalContact().then((id) => {
          this.getUserRelations(id).then((datas) => {
            if(datas && datas.length > 0) {
              const { customerid } = datas[0];
              window.open(`/spa/crm/static4mobile/index.html?isSingleChat=${isSingleChat ? '1' : '0'}&uid=${id}&vConsole=1&#/customerCard/${customerid}`);
            }
            setTimeout(() => {
              this.setState({ isSingleChat, id, loading: false });
              Toast.hide();
            }, 1000)
          })
        })
      }else{
        this.getCurExternalChat().then((id) => {
          this.getGroupRelations(id).then((datas) => {
            if(datas && datas.length > 0) {
              const { customerid } = datas[0];
              window.open(`/spa/crm/static4mobile/index.html?isSingleChat=${isSingleChat ? '1' : '0'}&uid=${id}&vConsole=1&#/customerCard/${customerid}`);
            }
            setTimeout(() => {
              this.setState({ isSingleChat, id, loading: false });
              Toast.hide();
            }, 1000)
          })
        })
      }
    })
  })
}
```

```js
init() {
  Toast.loading('loading...', 0);
  let _isSingleChat;
  let _id;
  this.loadEm7WxSDK()
    .then(em => this.getContext(em))
    .then(isSingleChat => {
      _isSingleChat = isSingleChat;
      return _isSingleChat ? this.getCurExternalContact() : this.getCurExternalChat()    
    })
    .then(id => {
      _id = id;
      return _isSingleChat ? this.getUserRelations(_id) : this.getGroupRelations(_id)
    })
    .then(datas => {
      if(datas && datas.length > 0) {
        window.open(`/spa/crm/static4mobile/index.html?isSingleChat=${_isSingleChat ? '1' : '0'}&uid=${_id}&vConsole=1&#/customerCard/${datas[0].customerid}`);
      }
      setTimeout(() => {
        this.setState({ isSingleChat: _isSingleChat, id: _id, loading: false });
        Toast.hide();
      }, 1000)
    })
    .catch(err => alert(err));
}
```

## Async / Await

```js
async init() {
  try {
    Toast.loading('loading...', 0);
    const em = await this.loadEm7WxSDK();
    const entry = await this.getContext(em);
    const isSingleChat = entry === 'single_chat_tools';
    const id = isSingleChat ? await this.getCurExternalContact() : await this.getCurExternalChat();
    const datas = isSingleChat ? await this.getUserRelations(id) : await this.getGroupRelations(id);
    if(datas && datas.length > 0) {
      const { customerid } = datas[0];
      window.open(`/spa/crm/static4mobile/index.html?isSingleChat=${isSingleChat ? '1' : '0'}&uid=${id}&vConsole=1&#/customerCard/${customerid}`);
    }
    setTimeout(() => {
      this.setState({ isSingleChat, id, loading: false });
      Toast.hide();
    }, 1000)
  } catch (err) {
    alert(err);
  }
}
```
