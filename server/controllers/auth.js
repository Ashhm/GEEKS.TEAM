import User from '../models/user';

export async function signin(req, res, next) {
    let {login, password} = req.body;

    const user = await User.findOne({login});


    if (!user)
        return next();

    //ive gonna user throw err is password is incorrect.
    try {
        const result = await user.comparePassword(password);
        if (!result)
            throw new Error(`Missmatch password`);
    } catch (err) {
        console.log(err);
        res.send(err);//todo: add a middleware to handle error!!!!
    }
    res.send(user);
}

export async function signup(req, res, next) {
    const credentials = req.body;

    console.log(credentials);
    //i should put user outside try/catch block.
    //Other solution to declare var user.
    let user;

    try {
        user = await User.create(credentials);
    } catch (err) {
        console.log(err);
    }

    res.send(user);
}