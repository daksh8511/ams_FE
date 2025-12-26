import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFormik } from "formik"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const empType = [
    { value: 'fullTime', label: 'Full time develop' },
    { value: 'partTime', label: 'Part time develop' },
    { value: 'intern', label: 'Intern' },
    { value: 'freelancer', label: 'Freelancer' },
  ]

  const formik = useFormik({
    initialValues: {
      name: "",
      email: '',
      password: '',
      empType: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name are required'),
      empType: Yup.string().required('Please seleect employee type'),
      email: Yup.string().required("Email are requied").email("Invalid format"),
      password: Yup.string().required("Password are required").min(8, "Be at least 8 characters long")
    }),
    onSubmit: (value) => {
      navigate('/login')
      console.log(value)
    }
  })

  const handleSubmit = () => {
    formik?.handleSubmit()
  }

  return (
    <div className="relative">
      <Card className="w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <CardHeader>
          <CardTitle>Register your account</CardTitle>
          <CardDescription>
            Enter your details below to register to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik?.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Enter your name"
                  required
                  value={formik?.values?.name}
                  onChange={(e) => formik?.setFieldValue('name', e.target.value)}
                />
                {
                  formik?.errors?.name && formik?.touched?.name && (
                    <span className="text-red-500">{formik?.errors?.name}</span>
                  )
                }
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Employee type</Label>
                <Select onValueChange={(value) => formik?.setFieldValue('empType', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a employee type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        <SelectContent>
                          <SelectGroup>
                            {
                              empType?.map((emp, i) => (
                                <SelectItem key={i} value={emp?.value}>{emp?.label}</SelectItem>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {
                  formik?.errors?.empType && formik?.touched?.empType && (
                    <span className="text-red-500">{formik?.errors?.empType}</span>
                  )
                }
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formik?.values?.email}
                  onChange={(e) => formik?.setFieldValue('email', e.target.value)}
                />
                {
                  formik?.errors?.email && formik?.touched?.email && (
                    <span className="text-red-500">{formik?.errors?.email}</span>
                  )
                }
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <InputGroup>
                  <InputGroupInput
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                    value={formik?.values?.password}
                    required
                    onChange={(e) => formik?.setFieldValue('password', e.target.value)}
                  />


                  <InputGroupAddon align="inline-end">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </InputGroupAddon>
                </InputGroup>
                {
                  formik?.errors?.password && formik?.touched?.password && (
                    <span className="text-red-500">{formik?.errors?.password}</span>
                  )
                }

              </div>
            </div>
            <CardFooter className="w-full p-0 mt-5">
              <Button type="submit" className="w-full" onClick={handleSubmit}>
                Login
              </Button>
            </CardFooter>
          </form>

        </CardContent>

      </Card>
    </div>
  )
}

export default Signup