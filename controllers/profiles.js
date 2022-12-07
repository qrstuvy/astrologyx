const Profile = require('../models/profile')

module.exports = {
create,
index
}

async function create (req, res) {
    const profile = await Profile.findOne({user: req.params.id})
    profile.favorites.push(req.body)
    await profile.save()
    console.log(profile)
    res.json(profile)
}

async function index (req, res){
    const profile = await Profile.findOne({user: req.params.id})
    console.log(profile)
    res.json(profile)
}