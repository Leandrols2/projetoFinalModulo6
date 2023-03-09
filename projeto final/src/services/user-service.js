const User = require ( '../schemas/user')
class UserService {
   static async createUser ({name, email, password}) {
    const { id } = await User.create ({
        name,
        email,
        password
    })
    return {id}

    }

}

module.exports = UserService