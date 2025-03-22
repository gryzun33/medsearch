import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PharmacyModule,
    MedicineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  // configure(consumer: MiddlewareConsumer) {}

  onModuleInit() {
    process.on('uncaughtException', (err) => {
      console.error(`Uncaught Exception: ${err.message}\n`, err.stack);
    });

    process.on('unhandledRejection', (reason: any) => {
      if (reason instanceof Error) {
        console.error(`Unhandled Rejection: ${reason.message}\n`, reason.stack);
      } else {
        console.error(`Unhandled Rejection: ${JSON.stringify(reason)}`);
      }
    });
  }
}
