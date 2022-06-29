const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.status(200).json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findByID(id);

    if (!category) {
      return response.status(404).send({
        error: 'Category not found',
      });
    }

    response.json(category);
  }

  async store(request, response) {
    let {
      name,
    } = request.body;
    if (name) {
      name = name.toLowerCase();

      const categoryExists = await CategoriesRepository.findByName(name);
      if (categoryExists) {
        return response.status(400).json({ error: 'This category has been already created' });
      }

      const category = await CategoriesRepository.create(name);
      response.status(200).json(category);
    } else {
      return response.status(400).json({ error: 'Name is required' });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    let { name } = request.body;
    if (name) {
      name = name.toLowerCase();

      const categoryById = await CategoriesRepository.findByID(id);
      if (!categoryById) {
        return response.status(404).send({
          error: 'Category does not exists',
        });
      }

      const categoryByName = await CategoriesRepository.findByName(name);

      if (categoryByName && categoryByName.id !== id) {
        return response.status(400).json({ error: 'This category has been already created' });
      }

      const category = await CategoriesRepository.update(id, {
        name,
      });

      response.status(200).json(category);
    } else {
      return response.status(400).json({ error: 'Name is required' });
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findByID(id);

    if (!category) {
      return response.status(404).send({
        error: 'Category not found',
      });
    }

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
