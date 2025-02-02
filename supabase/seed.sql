-- Insert patients
INSERT INTO
  public.patients (
    id,
    first_name,
    last_name,
    middle_name,
    date_of_birth,
    gender,
    date_of_injury,
    date_of_assessment,
    diagnosis,
    employer,
    job_title,
    insurance_carrier,
    claim_number,
    referring_physician,
    evaluator,
    signed_consent
  )
VALUES
  (
    '018e7936-56d4-7777-b6f4-917d23988cc0',
    'John',
    'Smith',
    'A',
    '1980-01-15',
    'male',
    '2023-06-10',
    '2023-06-15',
    'Lumbar Strain',
    'ABC Corp',
    'Construction Worker',
    'Blue Shield',
    'C123456',
    'Dr. Sarah Wilson',
    'Dr. James Brown',
    true
  ),
  (
    '028e7936-56d4-7777-b6f4-917d23988cc1',
    'Mary',
    'Johnson',
    NULL,
    '1975-03-22',
    'female',
    '2023-07-20',
    '2023-07-25',
    'Carpal Tunnel',
    'Tech Solutions',
    'Software Developer',
    'Aetna',
    'C789012',
    'Dr. Michael Lee',
    'Dr. Emma Davis',
    true
  ),
  (
    '038e7936-56d4-7777-b6f4-917d23988cc2',
    'Robert',
    'Davis',
    'M',
    '1990-11-05',
    'male',
    '2023-08-15',
    '2023-08-20',
    'Shoulder Tear',
    'Warehouse Co',
    'Forklift Operator',
    'United Health',
    'C345678',
    'Dr. John Adams',
    'Dr. Lisa Chen',
    true
  ),
  (
    '048e7936-56d4-7777-b6f4-917d23988cc3',
    'Patricia',
    'Wilson',
    NULL,
    '1988-07-12',
    'female',
    '2023-09-01',
    '2023-09-05',
    'Knee Injury',
    'Retail Inc',
    'Sales Associate',
    'Cigna',
    'C901234',
    'Dr. David Park',
    'Dr. Robert White',
    true
  ),
  (
    '058e7936-56d4-7777-b6f4-917d23988cc4',
    'Michael',
    'Brown',
    'J',
    '1982-05-30',
    'male',
    '2023-10-10',
    '2023-10-15',
    'Back Sprain',
    'Logistics Ltd',
    'Truck Driver',
    'State Farm',
    'C567890',
    'Dr. Amy Chen',
    'Dr. Mark Johnson',
    true
  ),
  (
    '068e7936-56d4-7777-b6f4-917d23988cc5',
    'Jennifer',
    'Miller',
    NULL,
    '1992-09-18',
    'female',
    '2023-11-05',
    '2023-11-10',
    'Wrist Fracture',
    'Office Plus',
    'Administrative Assistant',
    'Progressive',
    'C234567',
    'Dr. Tom Wilson',
    'Dr. Sarah Lee',
    true
  ),
  (
    '078e7936-56d4-7777-b6f4-917d23988cc6',
    'William',
    'Taylor',
    'R',
    '1978-12-25',
    'male',
    '2023-12-01',
    '2023-12-05',
    'Ankle Sprain',
    'City Services',
    'Maintenance Worker',
    'Liberty Mutual',
    'C890123',
    'Dr. Jessica Brown',
    'Dr. Chris Taylor',
    true
  ),
  (
    '088e7936-56d4-7777-b6f4-917d23988cc7',
    'Lisa',
    'Anderson',
    NULL,
    '1985-04-08',
    'female',
    '2024-01-15',
    '2024-01-20',
    'Tennis Elbow',
    'Sports Center',
    'Personal Trainer',
    'Nationwide',
    'C456789',
    'Dr. Kevin Martin',
    'Dr. Nicole Adams',
    true
  ),
  (
    '098e7936-56d4-7777-b6f4-917d23988cc8',
    'David',
    'Martinez',
    'L',
    '1987-08-14',
    'male',
    '2024-02-01',
    '2024-02-05',
    'Hip Strain',
    'Restaurant Group',
    'Chef',
    'Travelers',
    'C012345',
    'Dr. Rachel Green',
    'Dr. Daniel Lee',
    true
  ),
  (
    '108e7936-56d4-7777-b6f4-917d23988cc9',
    'Sarah',
    'Thomas',
    NULL,
    '1983-06-20',
    'female',
    '2024-02-15',
    '2024-02-20',
    'Rotator Cuff',
    'Healthcare Inc',
    'Nurse',
    'MetLife',
    'C678901',
    'Dr. Paul White',
    'Dr. Emily Brown',
    true
  );

-- Insert surgeries
INSERT INTO
  public.surgeries (id, patient_id, surgery_type, surgery_date)
VALUES
  (
    'a18e7936-56d4-7777-b6f4-917d23988dd0',
    '018e7936-56d4-7777-b6f4-917d23988cc0',
    'Lumbar Microdiscectomy',
    '2023-07-15'
  ),
  (
    'a28e7936-56d4-7777-b6f4-917d23988dd1',
    '018e7936-56d4-7777-b6f4-917d23988cc0',
    'Spinal Fusion',
    '2023-09-20'
  ),
  (
    'a38e7936-56d4-7777-b6f4-917d23988dd2',
    '028e7936-56d4-7777-b6f4-917d23988cc1',
    'Carpal Tunnel Release',
    '2023-08-10'
  ),
  (
    'a48e7936-56d4-7777-b6f4-917d23988dd3',
    '038e7936-56d4-7777-b6f4-917d23988cc2',
    'Arthroscopic Shoulder Surgery',
    '2023-09-15'
  ),
  (
    'a58e7936-56d4-7777-b6f4-917d23988dd4',
    '038e7936-56d4-7777-b6f4-917d23988cc2',
    'Rotator Cuff Repair',
    '2023-11-20'
  ),
  (
    'a68e7936-56d4-7777-b6f4-917d23988dd5',
    '048e7936-56d4-7777-b6f4-917d23988cc3',
    'Knee Arthroscopy',
    '2023-10-05'
  ),
  (
    'a78e7936-56d4-7777-b6f4-917d23988dd6',
    '058e7936-56d4-7777-b6f4-917d23988cc4',
    'Lumbar Laminectomy',
    '2023-11-15'
  ),
  (
    'a88e7936-56d4-7777-b6f4-917d23988dd7',
    '068e7936-56d4-7777-b6f4-917d23988cc5',
    'Open Reduction Internal Fixation',
    '2023-12-10'
  ),
  (
    'a98e7936-56d4-7777-b6f4-917d23988dd8',
    '078e7936-56d4-7777-b6f4-917d23988cc6',
    'Ankle Ligament Repair',
    '2024-01-05'
  ),
  (
    'aa8e7936-56d4-7777-b6f4-917d23988dd9',
    '078e7936-56d4-7777-b6f4-917d23988cc6',
    'Tendon Transfer',
    '2024-02-10'
  ),
  (
    'ab8e7936-56d4-7777-b6f4-917d23988dda',
    '088e7936-56d4-7777-b6f4-917d23988cc7',
    'Tennis Elbow Release',
    '2024-02-15'
  ),
  (
    'ac8e7936-56d4-7777-b6f4-917d23988ddb',
    '098e7936-56d4-7777-b6f4-917d23988cc8',
    'Hip Arthroscopy',
    '2024-03-01'
  ),
  (
    'ad8e7936-56d4-7777-b6f4-917d23988ddc',
    '098e7936-56d4-7777-b6f4-917d23988cc8',
    'Labral Repair',
    '2024-03-15'
  ),
  (
    'ae8e7936-56d4-7777-b6f4-917d23988ddd',
    '108e7936-56d4-7777-b6f4-917d23988cc9',
    'Rotator Cuff Surgery',
    '2024-03-10'
  ),
  (
    'af8e7936-56d4-7777-b6f4-917d23988dde',
    '108e7936-56d4-7777-b6f4-917d23988cc9',
    'Shoulder Decompression',
    '2024-04-15'
  );
