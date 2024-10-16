// entities/Employee.ts
export class Employee {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  address: string
  jobPosition: string
  password: string
  dateOfBirth: Date
  startDate: Date
  active: boolean

  constructor(
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    jobPosition: string,
    password: string,
    dateOfBirth: Date,
    startDate: Date,
    active: boolean = true // Default to active
  ) {
    this.id = id
    this.username = username
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
    this.jobPosition = jobPosition
    this.password = password
    this.dateOfBirth = dateOfBirth
    this.startDate = startDate
    this.active = active
  }

  // Full name getter
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  // Activate the employee
  activate(): void {
    this.active = true
  }

  // Deactivate the employee
  deactivate(): void {
    this.active = false
  }

  // Update job position
  updateJobPosition(newPosition: string): void {
    if (newPosition.trim()) {
      this.jobPosition = newPosition
    } else {
      throw new Error('Invalid job position')
    }
  }

  // Update address
  updateAddress(newAddress: string): void {
    if (newAddress.trim()) {
      this.address = newAddress
    } else {
      throw new Error('Invalid address')
    }
  }

  // Update email
  updateEmail(newEmail: string): void {
    if (this.validateEmail(newEmail)) {
      this.email = newEmail
    } else {
      throw new Error('Invalid email address')
    }
  }

  // Validate email format
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Update password
  updatePassword(newPassword: string): void {
    if (this.validatePassword(newPassword)) {
      this.password = newPassword
    } else {
      throw new Error('Password must be at least 6 characters')
    }
  }

  // Validate password (basic)
  private validatePassword(password: string): boolean {
    return password.length >= 6
  }

  // Update date of birth
  updateDateOfBirth(newDateOfBirth: Date): void {
    if (this.validateDate(newDateOfBirth)) {
      this.dateOfBirth = newDateOfBirth
    } else {
      throw new Error('Invalid date of birth')
    }
  }

  // Update start date
  updateStartDate(newStartDate: Date): void {
    if (this.validateDate(newStartDate)) {
      this.startDate = newStartDate
    } else {
      throw new Error('Invalid start date')
    }
  }

  // Validate date (simple date validation)
  private validateDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime())
  }
}
