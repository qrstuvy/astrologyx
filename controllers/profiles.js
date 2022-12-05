const Profile = require('../models/profile')

module.exports = {
create,
}

async function create (req, res) {
    const profile = await Profile.findOne({user: req.params.id})
    console.log(profile)
    profile.favorites.push(req.body)
    await profile.save()
    console.log(profile)
    res.json(profile)
}