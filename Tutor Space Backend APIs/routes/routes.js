const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
//const { check, validationResult } = require('express-validator');
const db = require('../models/associations');
const auth = require('../middlewares/authentication');
const Sequelize = require('sequelize');
const Const = require('../constants/const');


const router = express.Router();

// Define API route for student signup
router.post('/student/signup', async (req, res) => {
  try {
    // Create a new record in S_Location table with null longitude and latitude
    const sLocation = await db.S_Location.create({
      longitude: null,
      latitude: null
    });

    // Generate a hash of the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new record in Student table with S_Location ID as foreign key
    const student = await db.Student.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      age: req.body.age,
      contact_number: req.body.contact_number,
      password: hashedPassword,
      s_location: sLocation.sl_id
    });

    // Send success response with created student data
    res.status(201).json({ student });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});


// Define API route for tutor signup
router.post('/tutor/signup', async (req, res) => {
  try {
    // Create a new record in T_Location table with null longitude and latitude
    const tLocation = await db.T_Location.create({
      longitude: null,
      latitude: null
    },);

    // Generate a hash of the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new record in Tutor table with T_Location ID as foreign key
    const tutor = await db.Tutor.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      age: req.body.age,
      experience: req.body.experience,
      contact_number: req.body.contact_number,
      cnic: req.body.cnic,
      certification_linkedin: req.body.certification_linkedin || null,
      password: hashedPassword,
      t_location: tLocation.tl_id
    });

    // Send success response with created tutor data
    res.status(201).json({ tutor });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

//Student login API
router.post('/student/login', async (req, res) => {
  const { email, password } = req.body;
  // check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // find the student by email
    const student = await db.Student.findOne({ where: { email },
      attributes: ['s_id', 'name', 'email', 'address', 'age', 'contact_number', 'password'] 
    });
    

    if (!student) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, student.password);

    if (passwordMatch) {
      // password is correct, create and return JWT token
      const token = jwt.sign({ id:student.s_id, email: student.email }, Const.student , { expiresIn: '1h' });
      req.session.token = token;
      return res.json({ "Login Successful" : token });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Tutor login API
router.post('/tutor/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the tutor by email
    const tutor = await db.Tutor.findOne({ where: { email: email },
      attributes: ['t_id', 'name', 'email', 'address', 'age', 'experience', 'contact_number', 'cnic', 'certification_linkedin', 'password']
     });
    if (!tutor) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, tutor.password);

    // Check if password is correct
    if (passwordMatch) {
      // Password is correct, create and return JWT token
      const token = jwt.sign({ id:tutor.t_id, email: tutor.email }, Const.tutor , { expiresIn: '1h' });
      req.session.token = token;
      return res.json({ "Login Successful" : token });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Define API route for posting a student request
router.post('/student/post', auth.authenticateTokenS , async (req, res) => {
  try {
    // Get the student ID from the JWT token
    const studentId=req.user.id;

    // Create a new record in Post table with the student ID as foreign key
    const post = await db.Post.create({
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      price_range: req.body.price_range,
      duration: req.body.duration,
      requirement: req.body.requirement,
      s_id: studentId
    });

    // Send success response with created post data
    res.status(201).json({ post });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});


// Define API route for posting tutor availability
router.post('/tutor/tutoravailability', auth.authenticateTokenT, async (req, res) => {
  try {
    // Get the tutor ID from the JWT token
    const tutorId = req.user.id;

    const availability = await db.Tutor_availability.create({
      t_id: tutorId,
      day_of_week: req.body.day_of_week,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      rate_per_hour: req.body.rate_per_hour
    });
    
    // Send success response with created availability data
    res.status(201).json({ availability });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

//TutorPopUp api to post data in Tutor_pop_up table
router.post('/tutor/popup', auth.authenticateTokenT, async (req, res) => {
  try {
    // Get the tutor ID from the JWT token
    const tutorId = req.user.id;

     // Create a new record in Tutor_pop_up table with the tutor ID as foreign key
     const location = await db.Tutor_pop_up.create({
      tutor_longitude: req.body.tutor_longitude,
      tutor_latitude: req.body.tutor_latitude,
      t_id: tutorId
    });

    // Send success response with created location data
    res.status(201).json({ location });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// StudentPopUp api to post data in Student_pop_up table
router.post('/student/popup', auth.authenticateTokenS, async (req, res) => {
  try {
    // Get the student ID from the JWT token
    const studentId = req.user.id;

    // Create a new record in Student_pop_up table with the student ID as foreign key
    const studentPopUpRepository = getRepository(db.Student_pop_up);
    const location = studentPopUpRepository.create({
      student_longitude: req.body.student_longitude,
      student_latitude: req.body.student_latitude,
      s_id:  studentId ,
    });
    await studentPopUpRepository.save(location);

    // Send success response with created location data
    res.status(201).json({ location });
  } catch (err) {
    // Send error response if any error occurs
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});


// Get Popups of students to display to a tutor with subject, price range and location range filters
// Get Popups of students to display to a tutor with subject, price range and location range filters
router.get('/tutor/studentpopups', auth.authenticateTokenT, async (req, res) => {
  try {
    const subject = req.query.subject; // get subject query parameter, if present
    const price_min = req.query.price_min; // get minimum price query parameter, if present
    const price_max = req.query.price_max; // get maximum price query parameter, if present
    const range = req.query.range; // get range query parameter, if present

    const where = {};
    if (subject) {
      where.subject = subject;
    }
    if (price_min && price_max) {
      where['$Post.price_range$'] = {
        [Op.and]: [
          Sequelize.literal(`CAST(SUBSTRING_INDEX(Post.price_range, ' to ', 1) AS UNSIGNED) >= ${price_min}`),
          Sequelize.literal(`CAST(SUBSTRING_INDEX(Post.price_range, ' to ', -1) AS UNSIGNED) <= ${price_max}`)
        ]
      };    
    } else if (price_min) {
      where['$Post.price_range$'] = Sequelize.literal(`CAST(SUBSTRING_INDEX(Post.price_range, ' to ', 1) AS UNSIGNED) >= ${price_min}`);
    } else if (price_max) {
      where['$Post.price_range$'] = Sequelize.literal(`CAST(SUBSTRING_INDEX(Post.price_range, ' to ', -1) AS UNSIGNED) <= ${price_max}`);
    }

    // Get tutor's location
    const tutor = await db.Tutor.findOne({
      where: { t_id: req.user.id },
    });
    const tutorLocation = await db.T_Location.findOne({
      where: { tl_id: tutor.t_location },
    });

    if (!tutorLocation) {
      return res.status(404).json({ message: 'Tutor location not found' });
    }

    if (range) {
      // Get all students within range of tutor location
      const studentLocationDistance = Sequelize.fn(
        'ST_Distance_Sphere', 
        Sequelize.fn('POINT', tutorLocation.longitude, tutorLocation.latitude), 
        Sequelize.fn('POINT', Sequelize.col('Student_pop_up.student_longitude'), Sequelize.col('Student_pop_up.student_latitude'))
      );

      where['$Student_pop_up.student_latitude$'] = {
        [Op.and]: [
          {
            [Op.lte]: parseInt(range)
          },
          Sequelize.where(studentLocationDistance, '<=', parseInt(range))
        ]
      };
    }

    const students = await db.Student_pop_up.findAll({
      where,
      include: [{
        model: db.Student,
        include: [{
          model: db.Post,
          where: where,
          required: true
        }]
      }]
    });

    res.json({ students });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

//Get all tutor pop-ups by a student including rate per hour filter
router.get('/student/tutorpopups', auth.authenticateTokenS, async (req, res) => {
  try {
    const ratePerHourStart = req.query.rate_per_hour_start;
    const ratePerHourEnd = req.query.rate_per_hour_end;
    const range = req.query.range; // range in meters
    const tutors="";


    if(range){
      const student = await db.Student.findOne({
        where: { s_id: req.user.id },
      });
      const studentLocation= await db.S_Location.findOne({
        where: { sl_id: student.s_location },
      });
    const sLatitude = studentLocation.latitude; // student's latitude
    const sLongitude = studentLocation.longitude; // student's longitude

    tutors = await db.Tutor_pop_up.findAll({
      include: [
        {
          model: db.Tutor,
          include: [
            {
              model: db.Tutor_availability,
              where: {
                rate_per_hour: {
                  [Sequelize.Op.between]: [ratePerHourStart, ratePerHourEnd],
                },
              },
            },
          ],
        },
      ],
      where: Sequelize.literal(`6371 * 2 * ASIN(SQRT(POWER(SIN((${sLatitude} - abs(tutor_latitude)) * pi()/180 / 2),2) + COS(${sLatitude} * pi()/180 ) * COS(abs(tutor_latitude) * pi()/180) * POWER(SIN((${sLongitude} - tutor_longitude) * pi()/180 / 2), 2) )) * 1000 <= ${range}`)
    });
  }
    else{// Get all tutor pop-ups
      tutors = await db.Tutor_pop_up.findAll({
        include: [
          {
            model: db.Tutor,
            include: [
              {
                model: db.Tutor_availability,
                where: {
                  rate_per_hour: {
                    [Sequelize.Op.between]: [ratePerHourStart, ratePerHourEnd],
                  },
                },
              },
            ],
          },
        ],
      });
    }

    

    res.json({ tutors });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// API to get student post details when a popup is clicked
router.get('tutor/studentposts/:id', auth.authenticateTokenT, async (req, res) => {
  try {
    const studentId = req.params.id;

    // Get student post details based on student ID
    const studentPost = await db.Post.findAll({
      where: { s_id: studentId }
    });

    res.json({ studentPost });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// API to get tutor availability details when a popup is clicked
router.get('/student/gettutoravailability/:id', auth.authenticateTokenS, async (req, res) => {
  try {
    const tutorId = req.params.id;

    // Get tutor availability details based on tutor ID
    const tutorAvailability = await db.Tutor_availability.findAll({ where: { T_ID: tutorId } });

    res.json(tutorAvailability);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


//To be tested

// Update student record
router.post('/student/updatestudent/profile', auth.authenticateTokenS, async (req, res) => {
  const studentId = req.user.id;
  const { name, email, address, age, contactNumber, password } = req.body;

  try {
    // Get student's current info
    const currentStudent = await db.Student.findOne({ where: { s_id: studentId } });

    if (!currentStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Update student's info if provided
    const updatedStudent = {
      name: name || currentStudent.name,
      email: email || currentStudent.email,
      address: address || currentStudent.address,
      age: age || currentStudent.age,
      contact_number: contactNumber || currentStudent.contact_number,
      password: password || currentStudent.password,
    };

    // Update student record
    await db.Student.update(updatedStudent, { where: { s_id: studentId } });

    res.json({ message: 'Student record updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// Update tutor record
router.post('/tutor/updatetutor/profile', auth.authenticateTokenT, async (req, res) => {
  const tutorId = req.user.id;
  const { name, email, address, age, experience, contact_number, cnic, certification_linkedin, password } = req.body;

  try {
    // Get tutor's current info
    const currentTutor = await db.Tutor.findByPk(tutorId);

    if (!currentTutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    // Update tutor's info if provided
    const tutor = {
      name: name ? name : currentTutor.name,
      email: email ? email : currentTutor.email,
      address: address ? address : currentTutor.address,
      age: age ? age : currentTutor.age,
      experience: experience ? experience : currentTutor.experience,
      contact_number: contact_number ? contact_number : currentTutor.contact_number,
      cnic: cnic ? cnic : currentTutor.cnic,
      certification_linkedin: certification_linkedin ? certification_linkedin : currentTutor.certification_linkedin,
      password: password ? password : currentTutor.password,
    };

    // Update tutor record
    await currentTutor.update(tutor);

    res.json({ message: 'Tutor record updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// Delete student record and related data
router.post('/student/deletestudentaccount', auth.authenticateTokenS, async (req, res) => {
  const studentId = req.user.id;

  try {
    // Check if student exists
    const currentStudent = await db.Student.findOne({ where: { s_id: studentId } });

    if (!currentStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if student reviews exist
    const studentReviews = await db.S_Review.findAll({ where: { s_id: studentId } });
    if (studentReviews.length > 0) {
      // Delete student reviews
      await db.S_Review.destroy({ where: { s_id: studentId } });
    }

    // Check if tutor reviews exist
    const tutorReviews = await db.T_Review.findAll({ where: { s_id: studentId } });
    if (tutorReviews.length > 0) {
      // Delete tutor reviews
      await db.T_Review.destroy({ where: { s_id: studentId } });
    }

    // Check if student pop-up exists
    const studentPopUp = await db.Student_pop_up.findOne({ where: { s_id: studentId } });
    if (studentPopUp) {
      // Delete student pop-up
      await db.Student_pop_up.destroy({ where: { s_id: studentId } });
    }

    // Check if posts created by student exist
    const studentPosts = await db.Post.findAll({ where: { s_id: studentId } });
    if (studentPosts.length > 0) {
      // Delete posts created by student
      await db.Post.destroy({ where: { s_id: studentId } });
    }

    // Delete student record
    await db.Student.destroy({ where: { s_id: studentId } });

    res.json({ message: 'Student record and related data deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete tutor record and related data
router.post('/tutor/deletetutoraccount', auth.authenticateTokenT, async (req, res) => {
  const tutorId = req.user.id;

  try {
    // Check if tutor exists
    const currentTutor = await db.Tutor.findByPk(tutorId);

    if (!currentTutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    // Check if tutor reviews exist
    const tutorReviews = await db.T_Review.findAll({ where: { T_ID: tutorId } });
    if (tutorReviews.length > 0) {
      // Delete tutor reviews
      await db.T_Review.destroy({ where: { T_ID: tutorId } });
    }

    // Check if student reviews exist
    const studentReviews = await db.S_Review.findAll({ where: { T_ID: tutorId } });
    if (studentReviews.length > 0) {
      // Delete student reviews
      await db.S_Review.destroy({ where: { T_ID: tutorId } });
    }

    // Check if tutor pop-up exists
    const tutorPopUp = await db.Tutor_pop_up.findOne({ where: { T_ID: tutorId } });
    if (tutorPopUp) {
      // Delete tutor pop-up
      await tutorPopUp.destroy();
    }

    // Check if tutor availability exists
    const tutorAvailability = await db.Tutor_availability.findAll({ where: { T_ID: tutorId } });
    if (tutorAvailability.length > 0) {
      // Delete tutor availability
      await db.Tutor_availability.destroy({ where: { T_ID: tutorId } });
    }

    // Delete tutor record
    await currentTutor.destroy();

    res.json({ message: 'Tutor record and related data deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});



// Update student location
router.post('/student/updatestudentlocation', auth.authenticateTokenS, async (req, res) => {
  const studentId = req.user.id;
  const { longitude, latitude } = req.body;

  try {

    const currentStudent = await db.Student.findOne({ where: { s_id: studentId } });
    const currentLocation = await db.S_Location.findOne({ where: { sl_id: currentStudent.s_location } });

    if (!currentLocation) {
      return res.status(404).json({ message: 'Student location not found' });
    }

    await currentLocation.update({ longitude, latitude });

    res.json({ message: 'Student location updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// Update tutor location
router.post('/tutor/updatetutorlocation', auth.authenticateTokenT, async (req, res) => {
  const tutorId = req.user.id;
  const { longitude, latitude } = req.body;

  try {

    const currentTutor = await db.Tutor.findOne({ where: { t_id: studentId } });
    const currentLocation = await db.T_Location.findOne({ where: { tl_id: currentTutor.t_location } });

    if (!currentLocation) {
      return res.status(404).json({ message: 'Tutor location not found' });
    }

    await db.T_Location.update({ longitude, latitude }, { where: { t_id: tutorId } });

    res.json({ message: 'Tutor location updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// POST reviews students
router.post('/tutor/poststudentreview/:s_id', auth.authenticateTokenT, async (req, res) => {
  const { rating, description } = req.body;
  const t_id  = req.user.id;
  const { s_id } = req.params;

  // Validate input
  if (!rating || !s_id || !t_id) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Check if tutor has already given a review to the student
  try {
    const checkResult = await db.S_Review.findOne({ where: { t_id, s_id } });
    if (checkResult) {
      return res.status(400).json({ message: 'Tutor has already given a review to the student' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error checking review' });
  }

  // Save review to database
  try {
    await db.S_Review.create({ rating, description, t_id, s_id });
    return res.json({ message: 'Review saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error saving review' });
  }
});


// POST reviews tutors
router.post('/student/posttutorreview/:t_id', auth.authenticateTokenS, async (req, res) => {
  const { rating, description } = req.body;
  const s_id = req.user.id;
  const { t_id } = req.params;

  // Validate input
  if (!rating || !s_id || !t_id) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Check if student has already given a review to the tutor
  try {
    const checkResult = await db.T_Review.findOne({ where: { s_id: s_id, t_id: t_id } });
    if (checkResult) {
      return res.status(400).json({ message: 'Student has already given a review to the tutor' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error checking review' });
  }

  // Save review to database
  try {
    await db.T_Review.create({ rating: rating, description: description, s_id: s_id, t_id: t_id });
    return res.json({ message: 'Review saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error saving review' });
  }
});


// GET all tutor reviews
router.get('/student/gettutorreviews/:t_id', auth.authenticateTokenS, async (req, res) => {
  const { t_id } = req.params;

  // Retrieve all tutor reviews from database
  try {
    const reviews = await db.T_Review.findAll({
      where: { t_id },
    });
    return res.json(reviews);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error retrieving reviews' });
  }
});


// GET all student reviews
router.get('/tutor/getstudentreviews/:s_id', auth.authenticateTokenT, async (req, res) => {
  const { s_id } = req.params;

  // Retrieve all student reviews from database
  try {
    const result = await db.S_Review.findAll({ where: { s_id: s_id } });
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error retrieving reviews' });
  }
});

//Admin Login API
router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  // check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // find the admin by email
  try {
    const admin = await db.Admin.findOne({ where: { email },
      attributes: ['a_id', 'name', 'email', 'password']
    });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // check if password is correct
    if (password === admin.password) {
      // password is correct, create and return JWT token
      const token = jwt.sign({ id: admin.a_id, email: admin.email }, Const.admin , { expiresIn: '1h' });
      req.session.token = token;
      return res.json({ "Login Successful" : token });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Delete tutor record and related data from Admin
router.post('/admin/deletetutor/:t_id', auth.authenticateTokenA, async (req, res) => {
  const tutorId = req.params.t_id;

  try {
    const currentTutor = await db.Tutor.findOne({ where: { t_id: tutorId } });

    if (!currentTutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    const tutorReviews = await db.T_Review.findAll({ where: { t_id: tutorId } });
    if (tutorReviews.length > 0) {
      await db.T_Review.destroy({ where: { t_id: tutorId } });
    }

    const studentReviews = await db.S_Review.findAll({ where: { t_id: tutorId } });
    if (studentReviews.length > 0) {
      await db.S_Review.destroy({ where: { t_id: tutorId } });
    }

    const tutorPopUp = await db.Tutor_pop_up.findAll({ where: { t_id: tutorId } });
    if (tutorPopUp.length > 0) {
      await db.Tutor_pop_up.destroy({ where: { t_id: tutorId } });
    }

    const tutorAvailability = await db.Tutor_availability.findAll({ where: { t_id: tutorId } });
    if (tutorAvailability.length > 0) {
      await db.Tutor_availability.destroy({ where: { t_id: tutorId } });
    }

    await currentTutor.destroy();

    res.json({ message: 'Tutor record and related data deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete student record and related data from Admin
router.post('/admin/deletestudent/:s_id', auth.authenticateTokenA, async (req, res) => {
  const studentId = req.params.s_id;

  try {
    // Check if student exists
    const currentStudent = await db.Student.findOne({ where: { s_id: studentId } });

    if (!currentStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if student reviews exist
    const studentReviews = await db.S_Review.findAll({ where: { s_id: studentId } });
    if (studentReviews.length > 0) {
      // Delete student reviews
      await db.S_Review.destroy({ where: { s_id: studentId } });
    }

    // Check if tutor reviews exist
    const tutorReviews = await db.T_Review.findAll({ where: { s_id: studentId } });
    
    if (tutorReviews.length > 0) {
      // Delete tutor reviews
      await db.T_Review.destroy({ where: { s_id: studentId } });
    }

    // Check if student pop-up exists
    const studentPopUp = await db.Student_pop_up.findAll({ where: { s_id: studentId } });
    if (studentPopUp.length > 0) {
      // Delete student pop-up
      await db.Student_pop_up.destroy({ where: { s_id: studentId } });
    }

    // Check if posts created by student exist
    const studentPosts = await db.Post.findAll({ where: { s_id: studentId } });
    if (studentPosts.length > 0) {
      // Delete posts created by student
      await db.Post.destroy({ where: { s_id: studentId } });
    }

    // Delete student record
    await db.Student.destroy({ where: { s_id: studentId } });

    res.json({ message: 'Student record and related data deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// GET tutors and students with average rating for admin
router.get('/admin/getuseravgrating/:avgRating', auth.authenticateTokenA, async (req, res) => {
  try {
    const avgRating = parseFloat(req.params.avgRating);
    const t_ids = await db.T_Review.findAll({
      attributes: [
        't_id', 
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'avg_rating']
      ],
      group: ['t_id'],
      having: Sequelize.literal(`AVG(rating) <= ${avgRating}`)
    });
    
    const t_id_list = t_ids.map((item) => {
      return {
        t_id: item.t_id,
        avg_rating: item.get('avg_rating')
      }
    });
    
    console.log(t_id_list);
    
    // Get all the tutors whose t_id we got from t_review
    const tutors = await db.Tutor.findAll({
      where: {
        t_id: t_id_list.map((item) => item.t_id)
      },
      attributes: ['t_id', 'name', 'email', 'address', 'age'],
    });
    
    // Combine the tutor data with the average ratings
    const Tdata = t_id_list.map((item) => {
      const tutor = tutors.find((t) => t.t_id === item.t_id);
      return {
        t_id: item.t_id,
        avg_rating: item.avg_rating,
        name: tutor.name,
        age: tutor.age,
        address:tutor.address,
        email: tutor.email
      }
    });

    const s_ids = await db.S_Review.findAll({
      attributes: [
        's_id', 
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'avg_rating']
      ],
      group: ['s_id'],
      having: Sequelize.literal(`AVG(rating) <= ${avgRating}`)
    });
    
    const s_id_list = s_ids.map((item) => {
      return {
        s_id: item.s_id,
        avg_rating: item.get('avg_rating')
      }
    });
    
    console.log(s_id_list);
    
    // Get all the tutors whose t_id we got from t_review
    const students = await db.Student.findAll({
      where: {
        s_id: s_id_list.map((item) => item.s_id)
      },
      attributes: ['s_id', 'name', 'email', 'address', 'age'],
    });
    
    // Combine the tutor data with the average ratings
    const Sdata = s_id_list.map((item) => {
      const student = students.find((t) => t.s_id === item.s_id);
      return {
        s_id: item.s_id,
        avg_rating: item.avg_rating,
        name: student.name,
        age: student.age,
        address:student.address,
        email: student.email
      }
    });
    
    res.status(200).json({tutor: Tdata,student: Sdata });
    
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Logout API for student
router.post('/student/logout', auth.authenticateTokenS, (req, res) => {
  // destroy the token stored in session
  req.session.token = null;
  res.json({ message: 'Logged out successfully' });
});

// Logout API for tutor
router.post('/tutor/logout', auth.authenticateTokenT, (req, res) => {
  // destroy the token stored in session
  req.session.token = null;
  res.json({ message: 'Logged out successfully' });
});

// Logout API for admin
router.post('/admin/logout', auth.authenticateTokenA, (req, res) => {
  // destroy the token stored in session
  console.log(req.session.token);
  req.session.token = null;
  res.json({ message: 'Logged out successfully' });
});

router.get('/student/validateToken', auth.authenticateTokenS,(req, res)=>{
  res.status(200).json({student:req.user.id});
});

router.get('/tutor/validateToken', auth.authenticateTokenT,(req, res)=>{
  res.status(200).json({tutor:req.user.id});
});
//Export router
module.exports = { router };