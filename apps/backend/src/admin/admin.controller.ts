import { Controller, Get, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  async getDashboard(@Query('projectId') projectId?: string) {
    return this.adminService.getDashboardStats(projectId);
  }

  @Get('users')
  async getUsers(@Query('projectId') projectId?: string) {
    return this.adminService.getUsers(projectId);
  }
}
