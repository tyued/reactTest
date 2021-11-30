import { makeAutoObservable } from  'mobx'
import { observer } from 'mobx-react'

class Store{
    text = 'hello';
    title = '';

    constructor(){
        makeAutoObservable(this)
    }
}

export default Store;