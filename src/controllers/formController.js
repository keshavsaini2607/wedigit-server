import Form from "../db/models/Form.js";

export const getForms = async (_req, res, next) => {
   try {
      const forms = await Form.find();
      if (forms) {
         console.log(forms);
         const responseData = {
            message: "Success",
            forms: forms,
            status: 200,
         };

         res.json(responseData);
         return;
      }
      throw new Error("Something went wrong");
   } catch (error) {
      next(error);
   }
};

export const saveForm = async (req, res, next) => {
   try {
    console.log(req.body);
      const { name, email, phoneNumber, dateOfBirth } = req.body;
      const form = new Form({
         name,
         email,
         phoneNumber,
         dateOfBirth,
      });

      await form.save();

      const responseData = {
         message: "Form saved successfully",
         form: form,
         status: 200,
      };

      res.json(responseData);
   } catch (error) {
      next(error);
   }
};
