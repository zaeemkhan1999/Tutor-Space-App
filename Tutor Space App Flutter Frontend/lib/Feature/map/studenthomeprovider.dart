import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import '../../secure_storage.dart';

class StudentHomeProvider extends ChangeNotifier {
  List<dynamic> list = [];
  final SecureStorage secureStorage = SecureStorage();

  Future<void> fetchOrgs() async {
    String? token = await secureStorage.readData('Stoken');
    token = token?.replaceAll(" ' ", "");
    print(token);
    final url = Uri.parse('http://10.0.2.2:3000/student/tutorpopups');

    final response = await http.get(
      url,
      headers: {
        'Authorization': 'Bearer $token',
      },
    );
    print("getdata");
    print(response);
    print(response.statusCode);
    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body) as List<dynamic>;
      list = jsonData;
    } else {
      // Handle error case
    }

    notifyListeners();
  }
}
