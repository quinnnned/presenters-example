import * as Redux from 'redux'
import presenter from '../../presenter'
import reducer from '../../reducer'
import {hireEmployee, selectEmployee} from '../../actors'

it('behaves properly', () => {
    // Transition 0 (Setup)
    const store = Redux.createStore(reducer)
    store.dispatch( hireEmployee(0, "Mr. Boss", null) )
    store.dispatch( selectEmployee(0) )
    const getProps = () => 
        presenter(store.getState(), store.dispatch)

    // State 0
    let boss = getProps().employee
    expect(boss.name).toEqual("Mr. Boss")
    expect(boss.boss).not.toBeDefined()
    expect(boss.subordinates.length).toEqual(0)
   
    // Transition 1
    boss.addSubordinate('John Johnson')

    // State 1
    boss = getProps().employee
    let john = boss.subordinates[0]    
    expect(boss.name).toEqual("Mr. Boss")
    expect(boss.subordinates.length).toEqual(1)
    expect(john.name).toEqual('John Johnson')
    expect(john.boss.name).toEqual("Mr. Boss")
    expect(john.subordinates.length).toEqual(0)

    // Transition 2
    john.addSubordinate('Paul Paulson')

    // State 2
    boss = getProps().employee
    john = boss.subordinates[0]
    let paul = john.subordinates[0]
    expect(boss.name).toEqual("Mr. Boss")
    expect(boss.subordinates.length).toEqual(1)
    expect(john.name).toEqual('John Johnson')
    expect(john.boss.name).toEqual("Mr. Boss")
    expect(john.subordinates.length).toEqual(1)
    expect(paul.name).toEqual('Paul Paulson')
    expect(paul.boss.name).toEqual("John Johnson")
    expect(paul.subordinates.length).toEqual(0)

    // Transition 3
    john.navigate()

    // State 3
    john = getProps().employee
    boss = john.boss
    paul = john.subordinates[0]
    expect(boss.name).toEqual("Mr. Boss")
    expect(john.name).toEqual('John Johnson')
    expect(john.boss.name).toEqual("Mr. Boss")
    expect(john.subordinates.length).toEqual(1)
    expect(paul.name).toEqual('Paul Paulson')
    expect(paul.boss.name).toEqual("John Johnson")
    expect(paul.subordinates.length).toEqual(0)
})
