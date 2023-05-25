import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Demo extends StatefulWidget {
  const Demo({super.key});

  @override
  State<Demo> createState() => _DemoState();
}

class _DemoState extends State<Demo> {
  @override
  Widget build(BuildContext context) {
    void postStudentdetail() async {
      final url2 = Uri.parse('http://localhost:3000/student/popup');

      // Create a Map with the data you want to send

      var data2 = {'student_longitude': 40.7128, 'student_latitude': -74.0060};

      // Encode the data as JSON
      var body2 = jsonEncode(data2);

      // Set the headers
      var headers2 = {
        'Content-Type': 'application/json',
      };
      try {
        final response2 = await http.post(url2, headers: headers2, body: body2);
        if (response2.statusCode == 201) {
          var responseData2 = jsonDecode(response2.body);
          print('Data posted successfully');
          print('Created student data: $responseData2');
        } else {
          print('Error posting data: ${response2.statusCode}');
        }
      } catch (e) {
        print(e);
      }

      // Send the POST request
    }

    return Scaffold(
      appBar: AppBar(
        title: Text('Floating Action Button Demo'),
      ),
      body: Center(
        child: Text(
          'Press the Floating Action Button!',
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Handle FAB button press here
          postStudentdetail();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
