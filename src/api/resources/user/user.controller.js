import models from '../models';
import { generateControllers } from '../../modules/query';

export default generateControllers(models.Users);
