import catchAsyne from '../../utils/catchAsyne';
import { nurseryService } from './nursery.service';

const createNursery = catchAsyne(async (req, res) => {
  const result = await nurseryService.createNurseryDb(req.body);
  res.status(200).json({
    success: true,
    message: 'Nursery created successfully',
    data: result,
  });
});

const getAllNursery = catchAsyne(async (req, res) => {
  const result = await nurseryService.getAllNurseriesDb(req.query);
  res.status(200).json({
    success: true,
    message: 'Nurseries fetched successfully',
    data: result,
  });
});

const getNurseryById = catchAsyne(async (req, res) => {
  const { id } = req.params;
  const result = await nurseryService.singleNursery(id)
  res.status(200).json({
    success: true,
    message: 'Nursery single data fetched successfully',
    data: result,
  });
})


const updateNursery = catchAsyne(async (req, res) => {
  const { id } = req.params;
  const result = await nurseryService.updateNursery(id, req.body);
  res.status(200).json({
    success: true,
    message: 'Nursery updated successfully',
    data: result,
  });
});

const deleteNursery = catchAsyne(async (req, res) => {
  const { id } = req.params;
  const result = await nurseryService.deleteNursery(id);
  res.status(200).json({
    success: true,
    message: 'Nursery deleted successfully',
    data: result,
  });
});

export const nurseryController = {
  createNursery,
  getAllNursery,
  getNurseryById,
  updateNursery,
  deleteNursery,
};
