const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const { orderBy } = request.query;

    const contacts = await ContactsRepository.findAll(orderBy);

    response.status(200).json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;
    const contact = await ContactsRepository.findByID(id);

    if (!contact) {
      return response.status(404).send({
        error: 'User not found',
      });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    const emailToLowerCase = email.toLowerCase();

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(emailToLowerCase);
    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail has already been taken' });
    }

    const contact = await ContactsRepository.create(name, emailToLowerCase, phone, category_id);
    response.status(200).json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;

    let { email } = request.body;
    if (email) {
      email = email.toLowerCase();
    }

    const { name, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactById = await ContactsRepository.findByID(id);

    if (!contactById) {
      return response.status(404).send({
        error: 'User does not exists',
      });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.status(200).json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findByID(id);

    if (!contact) {
      return response.status(404).send({
        error: 'User not found',
      });
    }

    // 204 = no content
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
