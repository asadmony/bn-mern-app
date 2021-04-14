import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            user: 'Admin',
            eamil: 'admin@admin.com',
            password: bcrypt.hashSync('admin1234', 8),
            isAdmin: true,
        },
        {
            user: 'User',
            eamil: 'user@user.com',
            password: bcrypt.hashSync('user1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            id: 1,
            name: 'abssdasdadwadawdw',
        },
        {
            id: 2,
            name: 'bcd',
        },
    ]
}

export default data;