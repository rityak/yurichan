import users from '../../model/users.js'

export default function isAdmin(user_id: string): boolean {
  let success = false
  users.admins.map(id => {
    if (user_id === id) return (success = true)
  })
  return success
}
