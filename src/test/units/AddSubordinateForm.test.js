import {handleSubmit} from '../../view/AddSubordinateForm'

describe('form submit handler', () => {

    // Arrange
    const submitEvent = { 
        preventDefault: jest.fn(), 
        target: [{ 
            value: 'submitEvent.target[0].value'
        }] 
    }
    const employee = {
        addSubordinate: jest.fn()
    }

    // Affirm
    expect(submitEvent.preventDefault.mock.calls.length).toEqual(0)

    // Act
    handleSubmit(employee)(submitEvent)

    // Assert
    it('should prevent the default form submission', () => {
        expect(submitEvent.preventDefault.mock.calls.length).toEqual(1)
    })
})