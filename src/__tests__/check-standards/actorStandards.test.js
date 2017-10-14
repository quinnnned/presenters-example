const actors = require('../../actors.js');

describe('every actor', () => {
    Object.keys(actors).forEach( actorName => {
        describe(`${actorName}()`, () => {
            const actor = actors[actorName];
            describe('output', () => {
                it('should be an object', () => {
                    const action = actor();
                    expect(typeof action).toEqual('object');
                    expect(action).not.toEqual(null);
                })

                it(`should have a string .type property which is the SNAKE_CASE 
                    equivalent of the actor name`, () => {
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