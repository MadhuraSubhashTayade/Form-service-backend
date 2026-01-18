import { FormService } from "../services/form.service";

export class FormController {
  static async createNewForm(req, res) {
    try {
      const data = req.body;
      const form = await FormService.createNewForm(data);
      if (!form)
        return res.status(500).json({ error: "Error creating new form" });
      res.status(201).json(form);
    } catch (err) {
      console.error(`Error creating new form: ${err}`);
      res.status(500).json({ error: `Internal server error` });
    }
  }

  static async fetchAllForms(req, res) {
    try {
      const forms = await FormService.getAllForms();
      res.status(200).json(forms);
    } catch (err) {
      console.error(`Error getting all form: ${err}`);
      res.status(500).json({ error: `Internal server error` });
    }
  }

  static async fetchFormById(req, res) {
    try {
      const form = await FormService.getFormById(req.params.id);
      if (!form) return res.status(404).json({ error: "Form not found" });
      res.status(200).json(form);
    } catch (err) {
      console.error(`Error fetching form: ${err}`);
      res.status(500).json({ error: `Internal server error` });
    }
  }

  static async updateForm(req, res) {
    try {
      const updatedForm = await FormService.updateForm(req.params.id, req.body);
      if (!updatedForm)
        return res.status(404).json({ error: "Form not found" });
      res.status(200).json(updatedForm);
    } catch (err) {
      console.error(`Error updating form: ${err}`);
      res.status(500).json({ error: `Internal server error` });
    }
  }

  static async deleteForm(req, res) {
    try {
      const deletedForm = await FormService.deleteForm(req.params.id);
      if (!deletedForm)
        return res.status(404).json({ error: "Form not found" });
      res.status(200).json(deletedForm);
    } catch (err) {
      console.error(`Error deleting form: ${err}`);
      res.status(500).json({ error: `Internal server error` });
    }
  }
}
