import { Module } from "@nestjs/common"
import AuthController from "./auth.controller"

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [],
})
export default class AuthModule {}
