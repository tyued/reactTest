import { decorate, observable } from  'mobx'

class Store{
    text = 'hello';
    title = '';
}

decorate(Store,{
    text:observable,
    title:observable
})