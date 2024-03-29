import { Module } from "@nestjs/common"
import CourseController from "./post.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import {
    SessionMySqlEntity,
    UserMySqlEntity,
    PostMySqlEntity,
    CourseMySqlEntity,
    EnrolledInfoMySqlEntity,
    SectionMySqlEnitiy,
    LectureMySqlEntity,
    ResourceMySqlEntity,
    PostContentMySqlEntity,
    PostCommentMySqlEntity,
    PostCommentContentMySqlEntity,
    PostLikeMySqlEntity,
    PostCommentLikeMySqlEntity,
} from "@database"
import { ClientsModule, Transport } from "@nestjs/microservices"
import { join } from "path"
// import { servicesConfig } from "@config"
import { ConfigModule } from "@nestjs/config"
import { servicesConfig } from "@config"

@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: "COURSE_PACKAGE",
                imports: [ConfigModule],
                useFactory: async () => ({
                    transport: Transport.GRPC,
                    options: {
                        url: `${servicesConfig().restful.host}:${servicesConfig().restful.port}`,
                        package: "course",
                        protoPath: join(
                            process.env.NODE_ENV === "production"
                                ? process.cwd()
                                : servicesConfig().restful.path,
                            "protos",
                            "services",
                            "course",
                            "course.service.proto",
                        ),
                    },
                }),
            },
        ]),
        TypeOrmModule.forFeature([
            SessionMySqlEntity,
            UserMySqlEntity,
            PostMySqlEntity,
            CourseMySqlEntity,
            EnrolledInfoMySqlEntity,
            SectionMySqlEnitiy,
            LectureMySqlEntity,
            ResourceMySqlEntity,
            PostContentMySqlEntity,
            PostCommentMySqlEntity,
            PostCommentContentMySqlEntity,
            PostLikeMySqlEntity,
            PostCommentLikeMySqlEntity,
        ]),
    ],
    controllers: [CourseController],
    providers: [],
})
export default class CourseModule {}
