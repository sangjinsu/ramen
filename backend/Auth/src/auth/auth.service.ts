import { Injectable } from '@nestjs/common'
import { MemberService } from 'src/member/member.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  async validateMember(username: string, password: string): Promise<any> {
    const saltRounds = 10
    const member = await this.memberService.findOne(username)
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt)
    const isMatch = await bcrypt.compare(password, hash)
    if (member && isMatch) {
      const { password, ...result } = member
      return result
    }
    return null
  }

  async login(member: any) {
    const payload = { username: member.username, sub: member.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
