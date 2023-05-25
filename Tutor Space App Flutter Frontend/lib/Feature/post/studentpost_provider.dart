import 'package:flutter/material.dart';

class StudentPostProvider extends ChangeNotifier {
  TextEditingController titleController = TextEditingController();
  TextEditingController descriptionController = TextEditingController();
  TextEditingController priceController = TextEditingController();
  TextEditingController durationController = TextEditingController();
  TextEditingController requirmentController = TextEditingController();
  TextEditingController subjectController = TextEditingController();

  void Studentpost() {
    final title = titleController.text;
    final description = descriptionController.text;
    final subject = subjectController.text;
    final price = priceController.text;
    final Duration = durationController.text;
    final requirement = requirmentController.text;

    notifyListeners();
  }

  @override
  void dispose() {
    titleController.dispose();
    descriptionController.dispose();
    subjectController.dispose();
    priceController.dispose();
    durationController.dispose();
    requirmentController.dispose();
    super.dispose();
  }
}
