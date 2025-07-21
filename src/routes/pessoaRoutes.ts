import { Router } from 'express';
import {
  createPessoa,
  getPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa
} from '../controllers/PessoaController';

const router = Router();

router.post('/', createPessoa);
router.get('/', getPessoas);
router.get('/:id', getPessoaById);
router.put('/:id', updatePessoa);
router.delete('/:id', deletePessoa);

export default router;
