import React from 'react'
import View from '../../view'
import AddSubordinateForm from '../../view/AddSubordinateForm'
import renderer from 'react-test-renderer'
import {exampleEmployee} from '../helper'

//mock jquery
global.$ = () => ({ collapsible: () => {} })

describe('View', () => {
    it('renders without crashing', () => {
        expect(
            renderer.create(
                <View employee={exampleEmployee} />
            ).toJSON()
        ).toMatchSnapshot()
    })
})

describe('AddSubordinateForm', () => {
    it('renders without crashing', () => {
        expect(
            renderer.create(
                <AddSubordinateForm employee={exampleEmployee} />
            ).toJSON()
        ).toMatchSnapshot()
    })
})