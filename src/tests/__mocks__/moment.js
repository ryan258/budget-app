// we can't just import moment as usual
// import moment from 'moment'
// we must grab the actual version of moment
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
  return moment(timestamp)
}
