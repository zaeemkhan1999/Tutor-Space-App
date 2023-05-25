import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:tutorez_project/Feature/map/studenthome.dart';
import 'package:tutorez_project/Feature/post/studentpost_provider.dart';
import 'package:tutorez_project/Feature/studentlogin/student_login.dart';
import 'package:tutorez_project/Feature/studentsignup/student_signup_secondscreen.dart';
import 'package:tutorez_project/Feature/studentsignup/studentsignup_provider.dart';
import 'package:http/http.dart' as http;

import '../../secure_storage.dart';

class StudentPost extends StatefulWidget {
  const StudentPost({super.key});

  @override
  State<StudentPost> createState() => _StudentPostState();
}

class _StudentPostState extends State<StudentPost> {
  final SecureStorage secureStorage = SecureStorage();
  @override
  Widget build(BuildContext context) {
    final studentpostprovider = Provider.of<StudentPostProvider>(context);
    void postStudentdetail() async {
      print('entered function');

      final url = Uri.parse('http://10.0.2.2:3000/student/post');
      String? token = await secureStorage.readData('Stoken');
      // print(token);
      // token = jsonEncode(token);
      // print(token);

      token = token!.replaceAll(" ' ", "");
      print(token);

      // Create a Map with the data you want to send
      var data = {
        'title': studentpostprovider.titleController.text,
        'description': studentpostprovider.descriptionController.text,
        'subject': studentpostprovider.subjectController.text,
        'price_range': studentpostprovider.priceController.text,
        'duration': studentpostprovider.durationController.text,
        'requirement': studentpostprovider.requirmentController.text,
      };
      print(data);

      // Encode the data as JSON
      var body = jsonEncode(data);

      // Set the headers
      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token',
      };
      try {
        final response = await http.post(url, headers: headers, body: body);
        if (response.statusCode == 201) {
          var responseData = jsonDecode(response.body);
          print('Data posted successfully');
          print('Created student data: $responseData');
        } else {
          print('Error posting data: ${response.statusCode}');
        }
      } catch (e) {
        print(e);
      }
      final url2 = Uri.parse('http://10.0.2.2:3000/student/popup');

      // Create a Map with the data you want to send
      String? student_latitude1 = (await secureStorage.readData('latitude'));
      String? student_longitude1 = (await secureStorage.readData('longitude'));

      // student_latitude = student_latitude!.replaceAll(" ' ", "");
      // student_longitude = student_longitude!.replaceAll(" ' ", "");

      double student_latitude = 0.0;
      if (student_latitude1 == null) {
        // student_latitude = student_latitude!.replaceAll(" ' ", "");
        student_latitude = 0;
      } else {
        student_latitude = student_latitude1 as double;
      }

      double student_longitude = 0.0;
      if (student_longitude1 == null) {
        // student_latitude = student_latitude!.replaceAll(" ' ", "");
        student_longitude = 0;
      } else {
        student_longitude = student_longitude1 as double;
      }

      print(student_latitude);
      print(student_longitude);

      var data2 = {
        'student_latitude': student_latitude,
        'student_longitude': student_longitude,
      };

      // Encode the data as JSON
      var body2 = jsonEncode(data2);

      // Set the headers
      var headers2 = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${token}',
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
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Container(
          padding: EdgeInsets.fromLTRB(20, 2, 19, 0),
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          decoration: BoxDecoration(
            color: Color(0xffffffff),
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  // autogroupx6tzQnj (78SG6DV57fgt8HRpXCx6TZ)
                  margin: EdgeInsets.fromLTRB(20, 0, 245, 29),
                  width: double.infinity,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Container(
                        margin: EdgeInsets.fromLTRB(0, 0, 23, 4),
                        width: 25,
                        height: 0,
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            IconButton(
                              icon: Icon(Icons.arrow_back),
                              onPressed: () {
                                // Handle back button pressed
                                Navigator.pop(context);
                              },
                            ),
                            Text(
                              'Post',
                              style: GoogleFonts.roboto(
                                fontSize: 20,
                                fontWeight: FontWeight.w600,
                                height: 1.1725,
                                color: const Color(0xff000000),
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                Container(
                  // detailsmFu (58:2256)
                  margin: EdgeInsets.fromLTRB(0, 0, 240, 29),
                  child: Text(
                    'Details',
                    style: GoogleFonts.roboto(
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                      height: 1.1725,
                      color: Color(0xff000000),
                    ),
                  ),
                ),
                Container(
                  // group271GCf (58:2290)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 20),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // titlebEw (58:2277)
                        margin: EdgeInsets.fromLTRB(0, 0, 0, 5),
                        child: Text(
                          '   Title',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroup9qptvHD (78SGVxJWzT2SDwqJdH9qpT)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.titleController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 15, 13, 15),
                            hintText: 'Enter title',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // group271GCf (58:2290)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 20),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // titlebEw (58:2277)
                        margin: EdgeInsets.fromLTRB(0, 0, 0, 5),
                        child: Text(
                          '   Subject',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroup9qptvHD (78SGVxJWzT2SDwqJdH9qpT)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.subjectController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 15, 13, 15),
                            hintText: 'Enter subject',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // group27299y (58:2291)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 20),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // descriptionUi3 (58:2278)
                        margin: EdgeInsets.fromLTRB(11, 0, 0, 4),
                        child: Text(
                          'Description',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroupcabqCe3 (78SGd7mFPuw9FT8N25CAbq)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.descriptionController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 16, 13, 14),
                            hintText: 'Description',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // group273FsD (58:2292)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 20),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // pricerangens9 (58:2283)
                        margin: EdgeInsets.fromLTRB(11, 0, 0, 3),
                        child: Text(
                          'Price range',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroupmhgtJKh (78SGkStNNJ5DTnK5FxMHgT)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.priceController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 15, 13, 15),
                            hintText: 'price range',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // group274kxP (58:2293)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 20),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // duration6WT (58:2286)
                        margin: EdgeInsets.fromLTRB(11, 0, 0, 3),
                        child: Text(
                          'Duration',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroupuprvE6s (78SGs2XjnYg9LPzMBwUpRV)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.durationController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 17, 13, 13),
                            hintText: 'Duration',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // group275Hqq (58:2294)
                  margin: EdgeInsets.fromLTRB(21, 0, 22, 101),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        // requirments2oR (58:2289)
                        margin: EdgeInsets.fromLTRB(11, 0, 0, 3),
                        child: Text(
                          'Requirments',
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.1725,
                            color: Color(0xffe56031),
                          ),
                        ),
                      ),
                      Container(
                        // autogroupwifyZoM (78SH32F5qcW4XwRVyEWiFy)
                        width: double.infinity,
                        decoration: BoxDecoration(
                          border: Border.all(color: Color(0xffe56031)),
                          color: Color(0xffffffff),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Color(0x3f000000),
                              offset: Offset(0, 1),
                              blurRadius: 5,
                            ),
                          ],
                        ),
                        child: TextField(
                          controller: studentpostprovider.requirmentController,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            errorBorder: InputBorder.none,
                            disabledBorder: InputBorder.none,
                            contentPadding: EdgeInsets.fromLTRB(13, 16, 13, 14),
                            hintText: 'Requirment',
                            hintStyle: TextStyle(color: Color(0xffff9773)),
                          ),
                          style: GoogleFonts.roboto(
                            fontSize: 15,
                            fontWeight: FontWeight.w600,
                            height: 1.1725,
                            color: Color(0xff000000),
                          ),
                        ),
                      ),
                      Container(
                        // autogroupgn5vQoy (78SGHDAkaEtzSnCtP2gn5V)
                        margin: EdgeInsets.fromLTRB(190, 0, 0, 8),
                        child: TextButton(
                          onPressed: () {
                            postStudentdetail();
                            studentpostprovider.Studentpost();
                            Navigator.of(context).push(MaterialPageRoute(
                                builder: (context) => StudentHome()));
                          },
                          style: TextButton.styleFrom(
                            padding: EdgeInsets.zero,
                          ),
                          child: Container(
                            width: 114,
                            height: 35,
                            decoration: BoxDecoration(
                              color: Color(0xff004643),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: Center(
                              child: Text(
                                'Post',
                                style: GoogleFonts.roboto(
                                  fontSize: 22,
                                  fontWeight: FontWeight.w700,
                                  height: 1.2175,
                                  color: Color(0xffe56031),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
