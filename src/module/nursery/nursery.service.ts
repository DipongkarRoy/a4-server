import { queryBuilder } from '../../builder/queryBuilder';
import { searchAbleFields } from './nursery.constant';
import { TNursery } from './nursery.interface';
import { NuseryModel } from './nursery.model';

const createNurseryDb = async (payload: TNursery) => {
  const nursery = await NuseryModel.create(payload);
  return nursery;
};

const getAllNurseriesDb = async (query: Record<string, unknown>) => {
  const nurseryQuery = new queryBuilder(query, NuseryModel.find())
    .search(searchAbleFields)
    .paginate()
    .sort()
    .fields()
    .filter();
  const result = await nurseryQuery.modelQuery;
  return result;
};


const singleNursery = async(id:string)=>{
  const nursery = await NuseryModel.findById(id);
  return nursery;
}


const updateNursery = async(id:string, payload: TNursery)=>{
  const nursery = await NuseryModel.findByIdAndUpdate(id, payload, {new: true});
  return nursery;
}

const deleteNursery = async(id:string)=>{
  const nursery = await NuseryModel.findByIdAndDelete(id);
  return nursery;
}


export const nurseryService = {
  createNurseryDb,
  getAllNurseriesDb,
  singleNursery,
  updateNursery,
  deleteNursery,
};
