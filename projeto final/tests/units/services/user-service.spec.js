const UserService = require ('../../../src/services/user-service')
const User = require ('../../../src/schemas/user')

const createdUserMock = () => ({id: 1})


describe ('User Service', ()=> {
    it ('deve retornar um Id para o usuarios criados', async ()=> {
        jest.spyOn (User, 'create').mockImplementationOnce (createdUserMock)
        
        const created = await UserService.createUser ({
            email: 'any email',
            name: 'any name',
            password: '123456'
        })
        expect(created).toHaveProperty('idD')

    })
})