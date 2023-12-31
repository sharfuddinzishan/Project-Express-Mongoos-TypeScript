import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  db: process.env.DATABASE_URL,
  salt: process.env.SALT_ROUNDS,
  defaultStudentPass: process.env.DEFAULT_STUDENT_PASS
}
