import { Form } from "../models/Form.model";

// holds core logic of CRUD operations
export class FormService {
  static async createNewForm(data) {
    const form = new Form(data);
    return await form.save();
  }

  static async getAllForms() {
    return await Form.find();
  }

  static async getFormById(id) {
    return await Form.findById(id);
  }

  static async updateForm(id, data) {
    return await Form.findByIdAndUpdate(id, data);
  }

  static async deleteForm(id) {
    return await Form.findByIdAndDelete(id);
  }
}
