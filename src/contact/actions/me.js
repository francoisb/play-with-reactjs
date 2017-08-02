import * as config from './../config'

const editMe = (firstname, lastname, email) => ({ type: config.EDIT_ME, firstname, lastname, email })

export default editMe