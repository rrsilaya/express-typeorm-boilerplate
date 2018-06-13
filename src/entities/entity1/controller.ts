import { getRepository } from 'typeorm';
import { log } from '../../util';

import Entity1 from './model';

export const getEntities = async (req, res) => {
  // GET /entity

  try {
    const entities = await Entity1.find();

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched entities',
      data: entities
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Failure to fetch entities',
    });
  }
}

export const getEntity = async (req, res) => {
  // GET /entity/:id

  try {
    const entity = await Entity1.find(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched entity',
      data: entity
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Failure to fetch entity',
    });
  }
}

export const addEntity = async (req, res) => {
  // POST /entity

  try {
    const entityRepo = getRepository(Entity1);
    const entity = await entityRepo.save(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully added entity',
      data: entity
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Failure to add entity',
    });
  }
}

export const editEntity = async (req, res) => {
  // PUT /entity/:id
  // Request Body: { data: 'somedata' }
  try {
    const entityRepo = getRepository(Entity1);
    let entity = await entityRepo.findOne(req.params.id);

    entity.data = req.body.data;

    await entityRepo.save(entity);
    res.status(200).json({
      status: 200,
      message: 'Successfully updated entity',
      data: entity
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Failure to update entity',
    });
  }
}

export const deleteEntity = async (req, res) => {
  // DELETE /entity/:id
  try {
    const entityRepo = getRepository(Entity1);
    const entity = await entityRepo.findOne(req.params.id);

    await entityRepo.remove(entity);
    res.status(200).json({
      status: 200,
      message: 'Successfully removed entity',
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Failure to remove entity',
    });
  }
}