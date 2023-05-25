import 'dart:async';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:custom_info_window/custom_info_window.dart';
import 'package:provider/provider.dart';
import 'package:tutorez_project/Feature/map/studenthomeprovider.dart';
import 'package:tutorez_project/Feature/post/student_post.dart';
import 'package:tutorez_project/login_option_screen.dart';

import '../../secure_storage.dart';

class StudentHome extends StatefulWidget {
  @override
  State<StudentHome> createState() => StudentHomeState();
}

class StudentHomeState extends State<StudentHome> {
  Completer<GoogleMapController> _controller = Completer();
  CustomInfoWindowController _customInfoWindowController =
      CustomInfoWindowController();
  Set<Marker> _markers = {};

  @override
  void initState() {
    super.initState();

    context.read<StudentHomeProvider>().fetchOrgs();

    _getCurrent().then((Position position) {
      print(position.latitude);
      print(position.longitude);
    });

    Future.delayed(Duration(seconds: 1), () {
      List<dynamic> list = context.read<StudentHomeProvider>().list;
      print(list.length);
      loadData(list);
    });
  }

  final SecureStorage secureStorage = SecureStorage();

  Future<void> storeLocation(Position position) async {
    await secureStorage.writeData('longitude', position.longitude.toString());
    await secureStorage.writeData('latitude', position.latitude.toString());
  }

  Future<Position> _getCurrent() async {
    bool sE = await Geolocator.isLocationServiceEnabled();
    if (!sE) {
      return Future.error('Disabled');
    }
    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    Position position = await Geolocator.getCurrentPosition();
    print(position.latitude);
    print(position.longitude);

    await storeLocation(position);
    return position;
  }

  loadData(List<dynamic> list) {
    BitmapDescriptor customIcon;
    customIcon = BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueYellow,
    );

    BitmapDescriptor.fromAssetImage(
            ImageConfiguration(size: Size(20, 40)), 'assets/Group 194.png')
        .then((d) {
      customIcon = d;

      for (var e in list) {
        _markers.add(
          Marker(
            markerId: MarkerId(e['s_id']),
            position: LatLng(e['tutor_latitude'], e['tutor_longitude']),
            icon: customIcon,
            onTap: () {
              _customInfoWindowController.addInfoWindow!(
                Container(
                  width: 300,
                  height: 200,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border.all(color: Colors.grey),
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 300,
                        height: 100,
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: NetworkImage(e['image']),
                            fit: BoxFit.fitWidth,
                            filterQuality: FilterQuality.high,
                          ),
                          borderRadius: const BorderRadius.all(
                            Radius.circular(10.0),
                          ),
                          color: Colors.grey,
                        ),
                      ),
                      Padding(
                        padding:
                            const EdgeInsets.only(top: 10, left: 10, right: 10),
                        child: Row(
                          children: [
                            SizedBox(
                              width: 200,
                              child: Text(
                                e['name'],
                                style: TextStyle(fontWeight: FontWeight.bold),
                                maxLines: 1,
                                softWrap: false,
                              ),
                            ),
                            const Spacer(),
                          ],
                        ),
                      ),
                      Padding(
                        padding:
                            const EdgeInsets.only(top: 10, left: 10, right: 10),
                        child: Text(
                          e['description'],
                          maxLines: 2,
                        ),
                      ),
                    ],
                  ),
                ),
                LatLng(e['lat'], e['long']),
              );
            },
          ),
        );
      }
    });

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            child: GoogleMap(
              myLocationEnabled: true,
              mapType: MapType.normal,
              initialCameraPosition: CameraPosition(
                target: LatLng(24.860966, 66.990501),
                zoom: 11,
              ),
              onTap: (position) {
                _customInfoWindowController.hideInfoWindow!();
              },
              onCameraMove: (position) {
                _customInfoWindowController.onCameraMove!();
              },
              onMapCreated: (GoogleMapController controller) async {
                _customInfoWindowController.googleMapController = controller;
              },
              markers: _markers,
            ),
          ),
          Positioned(
            top: 16,
            right: 16,
            child: IconButton(
              iconSize: 70,
              icon: Icon(
                Icons.add_box,
                color: Color(0xffe56031),
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => StudentPost()),
                );
              },
            ),
          ),
          CustomInfoWindow(
            controller: _customInfoWindowController,
            height: 200,
            width: 300,
            offset: 35,
          ),
        ],
      ),
    );
  }
}
