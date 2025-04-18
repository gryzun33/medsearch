import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Controller('medicines')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Post()
  async create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicineService.create(createMedicineDto);
  }

  @Get()
  async findAll() {
    return this.medicineService.findAll();
  }

  @Get('search')
  async getMedicinesByName(@Query('searchText') searchText: string) {
    const medicines = await this.medicineService.getMedicinesByName(searchText);
    return medicines;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.medicineService.findOne(id);
  }

  @Get(':id/pharmacies')
  async findOneWithPharmacies(@Param('id') id: string) {
    return this.medicineService.findOneWithPharmacies(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicineService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.medicineService.remove(id);
  }
}
