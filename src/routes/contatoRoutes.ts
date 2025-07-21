import { Router } from 'express';
import {
  createContato,
  getContatos,
  updateContato,
  deleteContato
} from '../controllers/ContatoController';

const router = Router();

router.post('/', createContato);
router.get('/', getContatos);
router.put('/:id', updateContato);
router.delete('/:id', deleteContato);

export default router;
