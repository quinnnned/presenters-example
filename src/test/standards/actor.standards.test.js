const actors = require('../../actors.js');

describe('every actor', () => {
    Object.keys(actors).forEach( actorName => {
        describe(`${actorName}()`, () => {
            const actor = actors[actorName];

            it('is a function', () => {
                expect(typeof actor).toEqual('function');
            })

            describe('output', () => {
                it('is an object', () => {
                    const action = actor();
                    expect(typeof action).toEqual('object');
                    expect(action).not.toEqual(null);
                })

                it(`has a string .type property which is the SNAKE_CASE 
                    equivalent of its actor's name`, () => {
                    const action = actor();
                    expect(typeof action.type).toEqual('string');
                    expect(action.type)
                        .toEqual(
                            actorName.replace(/([A-Z])/g, '_$1').toUpperCase()
                        )
                })
            })
        })
    })
})